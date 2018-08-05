import Leaf
import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    
    /// Controller definitions
    let flashCardsController = FlashCardController()
    let cardsGroup = router.grouped("api/cards")
    
    let flashCardsLeafCtr = FlashCardLeafController(flashCardsController)
    let leafGroup = router.grouped("/")
    
    /// Controller setups
    leafGroup.get(use: flashCardsLeafCtr.index)
    leafGroup.get("/cards", use: flashCardsLeafCtr.index)
    
    cardsGroup.get(use: flashCardsController.index)
    cardsGroup.get(String.parameter, use: flashCardsController.byType)
    
    cardsGroup.patch(use: flashCardsController.update)
    
    cardsGroup.post(use: flashCardsController.create)
    
    cardsGroup.delete(FlashCard.parameter, use: flashCardsController.delete)
}
