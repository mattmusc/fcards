//
//  FlashCardType.swift
//  App
//
//  Created by mattmusc on 13/05/2018.
//

import FluentSQLite
import Foundation
import Vapor

enum FlashCardType: String, SQLiteEnumType, CaseIterable {
    case General = "general", Code = "code"
    
    static var allCases = [General, Code]
    
    static func reflectDecoded() throws -> (FlashCardType, FlashCardType) {
        return (.General, .Code)
    }
}
