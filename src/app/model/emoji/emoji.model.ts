
export class EmojisModel {
  eName!: string;
  eCategory!: string;
  eGroup!: string;
  eHtmlCode!: string;
  constructor() { }

  public static getAllEmojis(data: Array<any>): Array<EmojisModel> {

    let emojis: EmojisModel[] = [];
    if (!data || data.length === 0) {
      return [];
    }
    data.forEach(ele => {
      emojis = [...emojis, { eName: ele.name, eCategory: ele.category, eGroup: ele.group, eHtmlCode: ele.htmlCode[0] }]
    });

    return emojis;
  }

  public static getEmojiCategories(data: Array<any>): Set<string> {

    const eCat = new Set<string>();
    data.forEach(ele => eCat.add(ele.category));
    return eCat;

  }

}
