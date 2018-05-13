import Fluent
import Vapor

/// Controls basic CRUD operations on `FlashCard`s.
final class FlashCardController {
    func parameterTest(_ req: Request) throws -> String {
        let name = try req.parameters.next(String.self)
        return "hello, \(name)!"
    }
    
    /// Returns a list of all `FlashCard`s.
    func index(_ req: Request) throws -> Future<[FlashCard]> {
        return FlashCard.query(on: req).all()
    }
    
    /// Returns a single `FlashCard` given its id
    func specific(req: Request) throws -> Future<FlashCard> {
        return try req.parameters.next(FlashCard.self)
    }
    
    /// Returns a list of all `FlashCard`s with given `FlashCardType`
    func byType(_ req: Request) throws -> Future<[FlashCard]> {
        let typeString = try req.parameters.next(String.self)
        return try FlashCard.query(on: req)
            .filter(\FlashCard.type == FlashCardType(rawValue: typeString.lowercased()))
            .sort(\FlashCard.id)
            .all()
    }

    /// Saves a decoded `FlashCard` to the database.
    func create(_ req: Request) throws -> Future<FlashCard> {
        return try req.content.decode(FlashCard.self).flatMap { flashcard in
            return flashcard.save(on: req)
        }
    }
    
    /// Updates and existing `FlashCard`
    func update(req: Request) throws -> Future<FlashCard> {
        let card = try req.parameters.next(FlashCard.self)
        let content = try req.content.decode(FlashCard.self)
        
        return flatMap(to: FlashCard.self, card, content) { (card, posted) in
            card.title = posted.title
            card.content = posted.content
            card.type = posted.type
            card.known = posted.known
            
            return card.save(on: req)
        }
    }

    /// Deletes a parameterized `FlashCard`.
    func delete(_ req: Request) throws -> Future<HTTPStatus> {
        return try req.parameters.next(FlashCard.self).flatMap { flashcard in
            return flashcard.delete(on: req)
        }.transform(to: .ok)
    }
}
