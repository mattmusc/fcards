//
//  FlashCardLeafController.swift
//  App
//
//  Created by mattmusc on 05/08/2018.
//
import Leaf
import Vapor

struct FlashCardsContext: Encodable {
    let flashCards: [FlashCard]?
    let nOfCards: Int?
    let cardTypes: [FlashCardType]
}

/// Controller for Leaf views
public final class FlashCardLeafController {
    
    var api: FlashCardController
    
    init(_ api: FlashCardController) {
        self.api = api
    }
    
    /// Index of the page
    func index(_ req: Request) throws -> Future<View> {
        let leaf = try req.make(LeafRenderer.self)
        return FlashCard.query(on: req).all().flatMap(to: View.self) { cards in
            let context = FlashCardsContext(flashCards: cards.isEmpty ? [] : cards,
                                            nOfCards: cards.isEmpty ? 0 : cards.count,
                                            cardTypes: FlashCardType.allCases)
            return leaf.render("index", context)
        }
    }
    
    func add(_ req: Request) throws -> Future<View> {
        let leaf = try req.make(LeafRenderer.self)
        let context = FlashCardsContext(flashCards: [], nOfCards: 0, cardTypes: FlashCardType.allCases)
        return leaf.render("add", context)
    }
}
