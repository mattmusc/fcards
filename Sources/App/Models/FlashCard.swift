import FluentSQLite
import Vapor

/// A single entry of a `FlashCard`s list.
final class FlashCard: SQLiteModel {
    /// The unique identifier for this `FlashCard`.
    var id: Int?

    /// A title describing what this `FlashCard` entails.
    var title: String
    
    /// The content of this `FlashCard`
    var content: String
    
    /// The type of the `FlashCard`
    var type: FlashCardType
    
    /// If this card is known or not
    var known: Int
    
    /// Creates a new `FlashCard`.
    init(id: Int? = nil,
         title: String? = "title", content: String? = "content",
         type: FlashCardType? = .General,
         known: Int? = 0)
    {
        self.id = id
        self.title = title!
        self.content = content!
        self.type = type!
        self.known = known!
    }
    
    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.id = try container.decodeIfPresent(Int.self, forKey: .id) ?? nil
        self.title = try container.decodeIfPresent(String.self, forKey: .title) ?? "title"
        self.content = try container.decodeIfPresent(String.self, forKey: .content) ?? "content"
        self.type = try container.decodeIfPresent(FlashCardType.self, forKey: .type) ?? .General
        self.known = try container.decodeIfPresent(Int.self, forKey: .known) ?? 0
    }
}

/// Allows `FlashCard` to be used as a dynamic migration.
extension FlashCard: Migration { }

/// Allows `FlashCard` to be encoded to and decoded from HTTP messages.
extension FlashCard: Content { }

/// Allows `FlashCard` to be used as a dynamic parameter in route definitions.
extension FlashCard: Parameter { }
