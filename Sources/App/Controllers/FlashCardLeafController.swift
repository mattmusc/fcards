//
//  FlashCardLeafController.swift
//  App
//
//  Created by mattmusc on 05/08/2018.
//
import Leaf
import Vapor

/// Controller for Leaf views
public final class FlashCardLeafController {
    
    /// Index of the page
    func index(_ req: Request) throws -> Future<View> {
        let leaf = try req.make(LeafRenderer.self)
        let context = ["name": "Matteo"]
        return leaf.render("index", context)
    }
}
