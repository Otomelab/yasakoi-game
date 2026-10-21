
// 優しさの、優しくない恋 — Web Novel Engine
// Episode 4.5: 深夜の会議室「火を持って帰る日」

const SCENARIO_DATA = [
  {
    speaker: "",
    type: "monologue",
    text: "会議室の時計は、二十三時を少し過ぎていた。",
    heroVisible: false
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「……違う」",
    heroVisible: false
  },
  {
    speaker: "",
    type: "monologue",
    text: "ノートに赤字を書き込みながら、画面の出力結果を見比べる。",
    heroVisible: false
  },
  {
    speaker: "生成AIの出力",
    type: "system",
    text: "『今日もおつかれさま！ 頑張った自分にご褒美をあげよう！』",
    heroVisible: false
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "悪くはない。でも、違う。HARENIWAは、こんなふうに明るく背中を叩くブランドじゃない気がした。もっと静かで、手触りがあって、帰ってきた人の隣に黙って座ってくれるような――",
    heroVisible: false
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「まだいたんだ」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "背後からふいに声がして、肩が大きく跳ねた。振り向くと、笹塚怜が入り口に立っていた。",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「笹塚さん……お疲れさまです」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「お疲れさま。今、何時だと思ってる？」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「……二十三時、です」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「"少しだけ残る"って言ってなかった？」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「少しの範囲が、思ったより広くて……」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「それは便利な言葉だね」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "怜は静かに中へ入ってくる。机の上に広がった何十枚もの資料とプロンプト検証ログを見て、微かに眉を動かした。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「これ、全部今日？」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「いえ、昨日からです」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「余計に悪い答えだ」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「でも、あと少しなんです。HARENIWAらしくない出力の傾向が、少し見えてきて……」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「花園さん」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "名前を呼ぶ声が、いつもより低かった。怒っているわけじゃない。でも、優しいだけの声でもなかった。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「今日は帰ろう」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「でも」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「帰ろう」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "choice",
    prompt: "怜にまっすぐ見つめられて、どう答える？",
    options: [
      {
        text: "「……止めないでください。今止まったら、置いていかれそうで怖いんです」",
        affectionDelta: 20,
        reactionText: "怜の目がわずかに細くなる。"
      },
      {
        text: "「あと30分だけ……この1本だけプロンプトを試させてください」",
        affectionDelta: 5,
        reactionText: "怜は小さくため息をつき、首を横に振った。"
      },
      {
        text: "「笹塚さんには関係ないじゃないですか。私の仕事です」",
        affectionDelta: -5,
        reactionText: "怜の表情から一瞬だけ温度が消え、静かな影が落ちた。"
      }
    ]
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「止めてるよ」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「AIのことも、ブランドのことも、まだ分からないことばかりです。負けたくないって言ったのに、何も変わってなかったら嫌なんです……！」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "会議室の空気が重くなる。怜は机の上のノートに視線を落とした。",
    heroVisible: true
  },
  {
    speaker: "瑞希のノート",
    type: "system",
    text: "『HARENIWAは、どう励ますか。どこまで踏み込まないか。"頑張れ"ではなく、"帰ってこられた"を言う』",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「……君は、止めたくなる」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「危なっかしいから。放っておくと、勝つまで自分を削るから」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「そんなこと……っ」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「してるよ」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "怜は瑞希の正面に立った。近すぎない。でも、逃がしてはくれない距離。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「君が強くなりたいのは分かってる。負けたくないのも、ちゃんと見てる。――でも、壊れることと強くなることは違う」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "言葉を失った。怜はほんの少しだけ表情を緩めた。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「今日ここで帰っても、君の負けにはならない。明日、続きをやればいい。君が持ってきた違和感は、一晩寝たくらいで消えないよ」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「守られて、安心して、それで終わりたくないんです。だから、止められると……自分がまた甘えてしまいそうで怖いんです」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "怜の目が、少しだけ揺れた。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「僕は、君を止めたい」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「でも、君の火を消したいわけじゃない」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "怜は机の上から、瑞希のノートを一冊手に取り、静かに閉じて瑞希の前に置いた。",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「今日は、火を消すんじゃなくて、持って帰る日」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「持って帰る……？」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「そう。燃えたまま帰る。寝る。明日また燃やす。――それなら、負けじゃない」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「ここまでやったなら、明日は僕も見る。技術チームに聞くことも一緒に整理する」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「でも、それは……」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「君の代わりに答えるためじゃない」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「君が自分で答えるための準備を、隣でするだけ」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "choice",
    prompt: "胸の奥がぎゅっと縮む。差し伸べられた手触りに、どう返す？",
    options: [
      {
        text: "「……明日、続きをやってもいいですか」",
        affectionDelta: 25,
        reactionText: "怜が柔らかく微笑んだ。"
      },
      {
        text: "「ずるいです、笹塚さん。そんな言い方されたら……」",
        affectionDelta: 20,
        reactionText: "怜は微かに目尻を下げて笑った。"
      }
    ]
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「もちろん」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「……じゃあ、帰ります」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「えらい」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「子ども扱いしないでください」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「してないよ」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "怜は瑞希の重い仕事鞄をすっと持ち上げた。",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「あ、自分で持てます」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「知ってる」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「じゃあ……」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「持ちたいだけ」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「……そういうの、ずるいです」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「よく言われる」",
    heroVisible: true
  },
  {
    speaker: "瑞希",
    type: "mizuki",
    text: "「反省してください」",
    heroVisible: true
  },
  {
    speaker: "笹塚",
    type: "hero",
    text: "「検討する」",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "会議室の明かりを消すと、夜の廊下は思ったより静かだった。怜が隣を歩く。近すぎない。でも、ひとりではない距離。",
    heroVisible: true
  },
  {
    speaker: "",
    type: "monologue",
    text: "今日、止められた。でも、負けた気はしなかった。怜が私を止めたのではなく、明日まで連れていこうとしてくれたからだ。",
    heroVisible: true
  }
];

class Game {
  constructor() {
    this.step = 0;
    this.affection = 30;
    this.history = [];
    this.autoMode = false;
    this.autoTimer = null;
    this.soundEnabled = false;
    this.audioCtx = null;

    this.dom = {
      titleScreen: document.getElementById('title-screen'),
      stageScreen: document.getElementById('stage-screen'),
      epilogueScreen: document.getElementById('epilogue-screen'),
      btnStart: document.getElementById('btn-start'),
      btnAbout: document.getElementById('btn-about'),
      btnRestart: document.getElementById('btn-restart'),
      heroSprite: document.getElementById('hero-sprite-container'),
      speakerName: document.getElementById('speaker-name'),
      speakerAvatar: document.getElementById('speaker-avatar'),
      dialogueText: document.getElementById('dialogue-text'),
      dialogueBox: document.querySelector('.dialogue-box'),
      choiceOverlay: document.getElementById('choice-overlay'),
      choicesList: document.getElementById('choices-list'),
      meterBar: document.getElementById('meter-bar'),
      meterVal: document.getElementById('meter-value'),
      btnSound: document.getElementById('btn-sound'),
      btnAuto: document.getElementById('btn-auto'),
      btnLog: document.getElementById('btn-log'),
      logModal: document.getElementById('log-modal'),
      logList: document.getElementById('log-list'),
      btnCloseLog: document.getElementById('btn-close-log'),
      aboutModal: document.getElementById('about-modal'),
      btnCloseAbout: document.getElementById('btn-close-about')
    };

    this.initEvents();
  }

  initEvents() {
    this.dom.btnStart.addEventListener('click', () => this.startGame());
    this.dom.btnRestart.addEventListener('click', () => this.restartGame());
    this.dom.btnAbout.addEventListener('click', () => this.dom.aboutModal.classList.remove('hidden'));
    this.dom.btnCloseAbout.addEventListener('click', () => this.dom.aboutModal.classList.add('hidden'));
    
    this.dom.dialogueBox.addEventListener('click', () => {
      if (!this.dom.choiceOverlay.classList.contains('hidden')) return;
      this.next();
    });

    this.dom.btnAuto.addEventListener('click', () => this.toggleAuto());
    this.dom.btnSound.addEventListener('click', () => this.toggleSound());
    this.dom.btnLog.addEventListener('click', () => this.showLog());
    this.dom.btnCloseLog.addEventListener('click', () => this.dom.logModal.classList.add('hidden'));
  }

  startGame() {
    this.initAudio();
    this.dom.titleScreen.classList.remove('active');
    this.dom.stageScreen.classList.add('active');
    this.step = 0;
    this.affection = 30;
    this.history = [];
    this.updateMeter();
    this.render();
  }

  restartGame() {
    this.dom.epilogueScreen.classList.remove('active');
    this.dom.stageScreen.classList.add('active');
    this.step = 0;
    this.affection = 30;
    this.history = [];
    this.updateMeter();
    this.render();
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  playBip(freq = 440, dur = 0.08) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + dur);
    } catch(e) {}
  }

  toggleSound() {
    this.initAudio();
    this.soundEnabled = !this.soundEnabled;
    this.dom.btnSound.textContent = this.soundEnabled ? '🔊' : '🔈';
    if (this.soundEnabled) this.playBip(587, 0.15);
  }

  toggleAuto() {
    this.autoMode = !this.autoMode;
    this.dom.btnAuto.classList.toggle('active', this.autoMode);
    if (this.autoMode) {
      this.next();
    } else if (this.autoTimer) {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }
  }

  showLog() {
    this.dom.logList.innerHTML = this.history.map(item => {
      const cls = item.speaker === '瑞希' ? 'mizuki' : '';
      return `<div class="log-entry"><span class="log-name ${cls}">${item.speaker ? item.speaker + ':' : '（独白）'}</span><span>${item.text}</span></div>`;
    }).join('');
    this.dom.logModal.classList.remove('hidden');
  }

  next() {
    if (this.step >= SCENARIO_DATA.length) {
      this.finishScene();
      return;
    }
    this.render();
  }

  render() {
    if (this.step >= SCENARIO_DATA.length) {
      this.finishScene();
      return;
    }

    const node = SCENARIO_DATA[this.step];

    if (node.type === 'choice') {
      this.renderChoice(node);
      return;
    }

    // Regular line
    this.dom.choiceOverlay.classList.add('hidden');

    // Hero visibility
    if (node.heroVisible) {
      this.dom.heroSprite.classList.remove('hidden');
    } else {
      this.dom.heroSprite.classList.add('hidden');
    }

    // Speaker and Avatars
    this.dom.speakerName.className = 'speaker-badge';
    if (node.speaker === '瑞希') {
      this.dom.speakerName.classList.add('mizuki');
      this.dom.speakerAvatar.classList.remove('hidden');
      this.playBip(523, 0.05);
    } else if (node.speaker === '笹塚') {
      this.dom.speakerAvatar.classList.add('hidden');
      this.playBip(349, 0.06);
    } else {
      this.dom.speakerAvatar.classList.add('hidden');
      this.dom.speakerName.classList.add('monologue');
    }

    this.dom.speakerName.textContent = node.speaker || '';
    this.dom.dialogueText.textContent = node.text;

    this.history.push({ speaker: node.speaker, text: node.text });
    this.step++;

    if (this.autoMode) {
      if (this.autoTimer) clearTimeout(this.autoTimer);
      this.autoTimer = setTimeout(() => this.next(), 2400);
    }
  }

  renderChoice(node) {
    this.dom.choiceOverlay.classList.remove('hidden');
    this.dom.choicesList.innerHTML = '';

    node.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.affection = Math.min(100, Math.max(0, this.affection + opt.affectionDelta));
        this.updateMeter();
        this.history.push({ speaker: '瑞希（選択）', text: opt.text });
        this.playBip(659, 0.12);
        this.dom.choiceOverlay.classList.add('hidden');
        this.step++;
        this.render();
      });
      this.dom.choicesList.appendChild(btn);
    });
  }

  updateMeter() {
    this.dom.meterBar.style.width = `${this.affection}%`;
    this.dom.meterVal.textContent = this.affection;
  }

  finishScene() {
    this.dom.stageScreen.classList.remove('active');
    this.dom.epilogueScreen.classList.add('active');
    
    document.getElementById('final-affection').textContent = `${this.affection}%`;
    const rel = document.getElementById('final-relationship');
    const desc = document.getElementById('epilogue-desc');
    
    if (this.affection >= 70) {
      rel.textContent = '対等な伴走者（True Arc）';
      desc.textContent = '守られるだけじゃない。君が自分の足で立ち、明日の答えを自分で見つけるための準備を、怜は静かに隣で引き受けてくれた。火は消えないまま、明日へと続く。';
    } else {
      rel.textContent = '慎重な距離感';
      desc.textContent = '怜の優しさに戸惑いながらも、瑞希はノートを胸に抱きしめた。まだ素直には甘えられないけれど、確かな温かさが胸に残っている。';
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
