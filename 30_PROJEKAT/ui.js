export class ChatUI {
  //konstruktor
  constructor(l) {
    this.list = l;
  }

  //geter i seter
  set list(l) {
    this._list = l;
  }

  get list() {
    return this._list;
  }

  templateLI(data) {
    // Izvući podatke iz prosleđenog dokuemnta i zapisati ih u formatu
    // useranme: poruka
    // time_stamp
    let properDate = data.created_at.toDate();
    let dan = properDate.getDate();
    let mesec = properDate.getMonth() + 1;
    let godina = properDate.getFullYear();
    let sati = properDate.getHours();
    let minuti = properDate.getMinutes();
    dan = String(dan).padStart(2, "0");
    mesec = String(mesec).padStart(2, "0");
    sati = String(sati).padStart(2, "0");
    minuti = String(minuti).padStart(2, "0");
    let date = new Date();
    let currDay = date.getDate();
    let vreme;
    if (dan != currDay) {
      vreme = `${dan}.${mesec}.${godina}. - ${sati}:${minuti}`;
    } else {
      vreme = `${sati}:${minuti}`;
    }
    let htmlLI = `<li>
            <span class="username">${data.username}: </span>
            <span class="message">${data.message}</span>
            <div class="date">${vreme}</div>
        </li>`;
    this.list.innerHTML += htmlLI;
  }
  clearUL() {
    this.list.innerHTML = "";
  }
}
