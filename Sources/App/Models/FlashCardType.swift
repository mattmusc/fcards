//
//  FlashCardType.swift
//  App
//
//  Created by mattmusc on 13/05/2018.
//

import FluentSQLite
import Foundation

enum FlashCardType: String, SQLiteEnumType {
    static func reflectDecoded() throws -> (FlashCardType, FlashCardType) {
        return (.General, .Code)
    }
    
    case General = "general", Code = "code"
}
