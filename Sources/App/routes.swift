import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    let flashCardsController = FlashCardController()
    let cardsGroup = router.grouped("cards")
    
    cardsGroup.get(use: flashCardsController.index)
    cardsGroup.get(String.parameter, use: flashCardsController.byType)
    
    cardsGroup.patch(use: flashCardsController.update)
    
    cardsGroup.post(use: flashCardsController.create)
    
    cardsGroup.delete(FlashCard.parameter, use: flashCardsController.delete)
}
