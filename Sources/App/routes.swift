import Leaf
import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    
    /// Controller definitions
    let flashCardsController = FlashCardController()
    let apiGroup = router.grouped("api/cards")
    
    let flashCardsLeafCtr = FlashCardLeafController(flashCardsController)
    let leafGroup = router.grouped("/")
    
    /// Controller setups
    leafGroup.get(use: flashCardsLeafCtr.index)
    leafGroup.get("/cards", use: flashCardsLeafCtr.index)
    leafGroup.get("/add", use: flashCardsLeafCtr.add)
    
    apiGroup.get(use: flashCardsController.index)
    apiGroup.get(String.parameter, use: flashCardsController.byType)
    
    apiGroup.patch(use: flashCardsController.update)
    
    apiGroup.post(use: flashCardsController.create)
    
    apiGroup.delete(FlashCard.parameter, use: flashCardsController.delete)
}
