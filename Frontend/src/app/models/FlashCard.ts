export class FlashCard {
  id: number;
  title: string;
  content: string;
  known: boolean;

  constructor(id: number, title: string, content: string, known = false) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.known = known;
  }
}
