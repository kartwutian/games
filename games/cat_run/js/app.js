function initSplash() {
    gameState = "splash", resizeCanvas(), splash = new Elements.Splash(assetLib.getData("splashScreen"), canvas.width, canvas.height), userInput.addHitArea("moreGames", butEventHandler, null, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0), previousTime = (new Date).getTime(), updateSplashScreenEvent()
}

function initStartScreen() {
    gameState = "start", userInput.removeHitArea("moreGames"), 1 == audioType && (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .2,
        ease: "Linear.easeNone"
    })), background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [644, 0, canvas.width, 54]
    }, !0);
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 345],
            id: "play"
        },
        b = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 + 225, 345],
            id: "moreGames"
        },
        c = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 225, 345],
            id: "credits"
        };
    userInput.addHitArea("startGame", butEventHandler, null, "image", a), userInput.addHitArea("moreGames", butEventHandler, null, "image", b), userInput.addHitArea("credits", butEventHandler, null, "image", c);
    var d = new Array(a, b, c);
    aGElements = new Array;
    for (var e = 0; 5 > e; e++) {
        var f = new Elements.Bird(assetLib.getData("bird"), "menu", canvas.width, "bird");
        f.x = Math.random() * canvas.width, f.y = 250 * Math.random(), aGElements.push(f)
    }
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("numbers"), assetLib.getData("powerUpBar"), gameState, d, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateStartScreenEvent()
}

function initCreditsScreen() {
    gameState = "credits";
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [75, 355],
        id: "back"
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", a);
    var b = new Array(a);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("numbers"), assetLib.getData("powerUpBar"), gameState, b, canvas.width, canvas.height), panel.startTween2(), previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}

function initPreGame() {
    if (++throwNum > 2) return initGame(), void 0;
    gameState = "tutorial", background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height);
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [canvas.width / 2, 345],
        id: "play"
    };
    userInput.addHitArea("continue", butEventHandler, null, "image", a);
    var b = new Array(a);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("numbers"), assetLib.getData("powerUpBar"), gameState + throwNum, b, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateTutorialEvent()
}

function initGame() {
    gameState = "game", 1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .5,
        ease: "Linear.easeNone"
    })), userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [587, 0, 635, 54]
    }, !0), background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), cat = new Elements.Cat(assetLib.getData("cat"), assetLib.getData("catSign"), assetLib.getData("scoreNumbers"), assetLib.getData("uiButs"), canvas.width, canvas.height, catCallBack), gauge = new Elements.Gauge(assetLib.getData("gauge"), assetLib.getData("uiButs")), aGElements = new Array;
    var a = new Elements.Ledge(assetLib.getData("elements"), "ledge");
    a.startX = 55, a.startY = 385, aGElements.push(a), hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("pounceBarHolder"), assetLib.getData("pounceBar"), assetLib.getData("scoreNumbers"), starTotal), hud.recoverTime = 7 - .5 * aPowerUpBarData[2], offsetX = 0, gameTouchState = 0, aimX = targAimX = cat.x, aimY = targAimY = cat.y, stageX = 0, stageY = 0, flyX = 0, nextElementX = 300 * Math.random() + 500, gapIncrease = 0, gElementAttached = null, curAirTime = 0, longestAirTime = 0, objectsHit = 0, aParticles = new Array, previousTime = (new Date).getTime(), updateGameEvent()
}

function butEventHandler(a, b) {
    switch (a) {
        case "langSelect":
            curLang = b.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), initLoadAssets();
            break;
        case "startGame":
            playSound("click"), userInput.removeHitArea("startGame"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initPreGame();
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("startGame"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            //window.open("http://www.happylander.com");
            break;
        case "continue":
            playSound("click"), userInput.removeHitArea("continue"), initGame();
            break;
        case "jump":
            if (userInput.removeHitArea("jump"), gauge.changeState("jumping"), cat.changeState("jumping"), vx = 900 * gauge.getPower(), vy = 400 + 32 * aPowerUpBarData[0], vx > 840) {
                for (var c = 0; 3 > c; c++) addParticle(2, 100 * Math.random() + 275, 100 * Math.random() + 250, 1 * Math.random() + 1, !1);
                vx += 200, playSound("bigJump")
            } else playSound("normalJump");
            vx += 45 * aPowerUpBarData[0];
            break;
        case "pounce":
            hud.pounce() && (vy = -1e3, playSound("pounce"), addParticle(1, cat.x, cat.y, 2), gElementAttached && gElementAttached.dislodge());
            break;
        case "nextFromJumpEnd":
            playSound("click"), userInput.removeHitArea("nextFromJumpEnd"), userInput.removeHitArea("pause"), initGameEnd();
            break;
        case "nextFromGameEnd":
            playSound("click"), userInput.removeHitArea("nextFromGameEnd"), initPowerUps();
            break;
        case "nextFromPowerUps":
            playSound("click"), userInput.removeHitArea("nextFromPowerUps"), userInput.removeHitArea("quitFromPowerUps"), userInput.removeHitArea("powerUp0"), userInput.removeHitArea("powerUp1"), userInput.removeHitArea("powerUp2"), userInput.removeHitArea("powerUp3"), initPreGame();
            break;
        case "quitFromPowerUps":
            playSound("click"), userInput.removeHitArea("nextFromPowerUps"), userInput.removeHitArea("quitFromPowerUps"), userInput.removeHitArea("powerUp0"), userInput.removeHitArea("powerUp1"), userInput.removeHitArea("powerUp2"), userInput.removeHitArea("powerUp3"), throwNum = 0, initStartScreen();
            break;
        case "powerUp0":
            starTotal >= aPowerUpButsData[aPowerUpBarData[0]] && aPowerUpBarData[0] < 8 && (playSound("powerUpClick"), starTotal -= aPowerUpButsData[aPowerUpBarData[0]], aPowerUpBarData[0]++, panel.oScoreData = {
                starTotal: starTotal,
                aPowerUpBarData: aPowerUpBarData
            }, setPowerUpButs());
            break;
        case "powerUp1":
            starTotal >= aPowerUpButsData[aPowerUpBarData[1]] && aPowerUpBarData[1] < 8 && (playSound("powerUpClick"), starTotal -= aPowerUpButsData[aPowerUpBarData[1]], aPowerUpBarData[1]++, panel.oScoreData = {
                starTotal: starTotal,
                aPowerUpBarData: aPowerUpBarData
            }, setPowerUpButs());
            break;
        case "powerUp2":
            starTotal >= aPowerUpButsData[aPowerUpBarData[2]] && aPowerUpBarData[2] < 8 && (playSound("powerUpClick"), starTotal -= aPowerUpButsData[aPowerUpBarData[2]], aPowerUpBarData[2]++, panel.oScoreData = {
                starTotal: starTotal,
                aPowerUpBarData: aPowerUpBarData
            }, setPowerUpButs());
            break;
        case "powerUp3":
            starTotal >= aPowerUpButsData[aPowerUpBarData[3]] && aPowerUpBarData[3] < 8 && (playSound("powerUpClick"), starTotal -= aPowerUpButsData[aPowerUpBarData[3]], aPowerUpBarData[3]++, panel.oScoreData = {
                starTotal: starTotal,
                aPowerUpBarData: aPowerUpBarData
            }, setPowerUpButs());
            break;
        case "mute":
            playSound("click"), toggleMute();
            break;
        case "pause":
        case "resumeFromPause":
            playSound("click"), toggleManualPause();
            break;
        case "quitFromPause":
            playSound("click"), toggleManualPause(), throwNum = 0, userInput.removeHitArea("pause"), userInput.removeHitArea("jump"), userInput.removeHitArea("pounce"), userInput.removeHitArea("nextFromJumpEnd"), userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), initStartScreen()
    }
}

function addParticle(a, b, c, d, e) {
    "undefined" == typeof d && (d = 1), "undefined" == typeof e && (e = !0);
    var f = -vx / 75;
    e || (f = b);
    var g = new Elements.Particle(assetLib.getData("particle" + a), f);
    g.x = b, g.y = c, g.scaleX = g.scaleY = d, aParticles.push(g)
}

function addGElement() {
    var a = Math.floor(9 * Math.random());
    switch (2500 > flyX && 1 == a && (a = Math.floor(7 * Math.random()) + 2), a) {
        case 0:
            var b = new Elements.Kite(assetLib.getData("elements"), "kite");
            b.startX = flyX + 700, b.startY = 200 * Math.random() - 100, aGElements.push(b);
            break;
        case 1:
            var c = new Elements.Goal(assetLib.getData("elements"), "goal");
            c.startX = flyX + 700, c.startY = 382, aGElements.push(c);
            break;
        case 2:
            var d = new Elements.Football(assetLib.getData("elements"), "football");
            d.startX = flyX + 700, d.startY = 150 * Math.random() + 150, aGElements.push(d);
            break;
        case 3:
            var e = new Elements.Trampoline(assetLib.getData("elements"), "trampoline");
            e.startX = flyX + 700, e.startY = 385, aGElements.push(e);
            break;
        case 4:
            var f = new Elements.BeachBall(assetLib.getData("elements"), "beachBall");
            f.startX = flyX + 700, f.startY = 150 * Math.random() + 100, aGElements.push(f);
            break;
        case 5:
            var g = new Elements.Pool(assetLib.getData("elements"), assetLib.getData("splash"), "pool");
            g.startX = flyX + 700, g.startY = 390, aGElements.push(g);
            break;
        case 6:
        case 7:
        case 8:
            var h = new Elements.Bird(assetLib.getData("bird"), "game", canvas.width, "bird");
            h.startX = flyX + 700, h.startY = 350 * Math.random() - 50, aGElements.push(h)
    }
}

function hitGElement(a) {
    switch (addParticle(1, cat.x, cat.y), objectsHit++, a) {
        case "bird":
            0 > vy ? vy = 200 : vy += 200, vx += 300, playSound("bird" + Math.ceil(3 * Math.random()));
            break;
        case "kite":
        case "kiteCat":
            vy = 50, playSound("hitKite");
            break;
        case "goal":
            vy = 0, vx *= .65, gElementAttached && gElementAttached.dislodge(), playSound("goal");
            break;
        case "football":
            0 > vy ? vy = 100 * Math.random() + 150 : vy += 100 * Math.random() + 150, vx += 300 * Math.random() + 100, playSound("football");
            break;
        case "trampoline":
            vy = 0 > vy ? Math.max(1.1 * -vy, 200 * Math.random() + 300) : Math.max(1.1 * vy, 200 * Math.random() + 300), vx += 100 * Math.random() + 100, gElementAttached && gElementAttached.dislodge(), playSound("trampoline");
            break;
        case "beachBall":
            0 > vy ? vy = 100 * Math.random() + 200 : vy += 100 * Math.random() + 200, vx += 200 * Math.random() + 100, playSound("beachBall");
            break;
        case "pool":
            vy = 0 > vy ? Math.max(.9 * -vy, 200 * Math.random() + 200) : Math.max(.9 * vy, 200 * Math.random() + 200), vx += 100 * Math.random() + 100, gElementAttached && gElementAttached.dislodge(), playSound("splash")
    }
}

function updateScore() {}

function initGameEnd() {
    gameState = "gameEnd", 1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, 2, {
        volume: .2,
        ease: "Linear.easeNone"
    }));
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [canvas.width / 2, 345],
        id: "play"
    };
    userInput.addHitArea("nextFromGameEnd", butEventHandler, null, "image", a);
    var b = new Array(a);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("scoreNumbers"), assetLib.getData("powerUpBar"), gameState, b, canvas.width, canvas.height);
    var c = Math.round(hud.dist / 10 + longestAirTime / 10 + objectsHit / 5);
    starTotal = Math.min(c + starTotal, 999), hud.dist > longestDist && (longestDist = hud.dist), panel.oScoreData = {
        dist: hud.dist,
        airTime: longestAirTime,
        objectsHit: objectsHit,
        starBonus: c,
        starTotal: starTotal,
        longestDist: longestDist
    }, panel.startTween1(), previousTime = (new Date).getTime(), updateGameEndEvent()
}

function initPowerUps() {
    gameState = "powerUps";
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 345],
            id: "play"
        },
        b = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 225, 345],
            id: "quit"
        },
        c = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [270, 150],
            id: "powerUp" + aPowerUpButsData[aPowerUpBarData[0]] + "On",
            num: 0
        },
        d = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [584, 150],
            id: "powerUp" + aPowerUpButsData[aPowerUpBarData[1]] + "On",
            num: 1
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [270, 250],
            id: "powerUp" + aPowerUpButsData[aPowerUpBarData[2]] + "On",
            num: 2
        },
        f = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [584, 250],
            id: "powerUp" + aPowerUpButsData[aPowerUpBarData[3]] + "On",
            num: 3
        };
    userInput.addHitArea("nextFromPowerUps", butEventHandler, null, "image", a), userInput.addHitArea("quitFromPowerUps", butEventHandler, null, "image", b), userInput.addHitArea("powerUp0", butEventHandler, null, "image", c), userInput.addHitArea("powerUp1", butEventHandler, null, "image", d), userInput.addHitArea("powerUp2", butEventHandler, null, "image", e), userInput.addHitArea("powerUp3", butEventHandler, null, "image", f);
    var g = new Array(c, d, e, f, a, b);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("scoreNumbers"), assetLib.getData("powerUpBar"), gameState, g, canvas.width, canvas.height), setPowerUpButs(), panel.oScoreData = {
        starTotal: starTotal,
        aPowerUpBarData: aPowerUpBarData
    }, panel.startTween1(), previousTime = (new Date).getTime(), updatePowerUpsEvent()
}

function setPowerUpButs() {
    panel.aButs[0].id = aPowerUpButsData[aPowerUpBarData[0]] > starTotal || aPowerUpBarData[0] >= 8 ? "powerUp" + aPowerUpButsData[aPowerUpBarData[0]] + "Off" : "powerUp" + aPowerUpButsData[aPowerUpBarData[0]] + "On", panel.aButs[1].id = aPowerUpButsData[aPowerUpBarData[1]] > starTotal || aPowerUpBarData[1] >= 8 ? "powerUp" + aPowerUpButsData[aPowerUpBarData[1]] + "Off" : "powerUp" + aPowerUpButsData[aPowerUpBarData[1]] + "On", panel.aButs[2].id = aPowerUpButsData[aPowerUpBarData[2]] > starTotal || aPowerUpBarData[2] >= 8 ? "powerUp" + aPowerUpButsData[aPowerUpBarData[2]] + "Off" : "powerUp" + aPowerUpButsData[aPowerUpBarData[2]] + "On", panel.aButs[3].id = aPowerUpButsData[aPowerUpBarData[3]] > starTotal || aPowerUpBarData[3] >= 8 ? "powerUp" + aPowerUpButsData[aPowerUpBarData[3]] + "Off" : "powerUp" + aPowerUpButsData[aPowerUpBarData[3]] + "On"
}

function catCallBack(a) {
    switch (a) {
        case "moving":
            flyX = cat.x, flyY = cat.y, gameTouchState = 1, userInput.addHitArea("pounce", butEventHandler, null, "rect", {
                aRect: [0, 60, canvas.width, canvas.height]
            }, !0), gauge.changeState("moving"), hud.showHud();
            break;
        case "kiteCatOn":
            cat.changeState("kiteCatOn");
            break;
        case "kiteCatOff":
            cat.changeState("kiteCatOff"), playSound("loseKite")
    }
}

function initMoveEnded() {
    addParticle(2, cat.x, cat.y - 70, 3.5, !1), cat.changeState("showSign", {
        dist: hud.dist
    }), playSound("jumpEnd")
}

function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        var a = getDelta();
        1 == gameTouchState && (vx = Math.min(Math.max(vx - airResistance * a, 0), 1500), flyX += vx * a, curAirTime += vx * a, hud.dist = Math.floor(flyX / 50), vy -= gElementAttached ? gravity * a / (2 + .35 * aPowerUpBarData[3]) : gravity * a, vy = Math.min(vy, 700), flyY -= vy * a, flyY > 330 && (flyY = 330, vy *= -(.5 + .03 * aPowerUpBarData[1]), vx *= .9, vy > 5 && playSound("ground"), curAirTime / 50 > longestAirTime && (longestAirTime = Math.round(curAirTime / 50)), curAirTime = 0, gElementAttached && gElementAttached.dislodge(), 0 == vx && (hud.hideHud(), userInput.removeHitArea("pounce"), Math.abs(vy) < 10 && (initMoveEnded(), gameTouchState = 0))), stageX += (flyX - canvas.width / 3 - stageX) / .1 * a, stageY -= (flyY - (100 - stageY)) / .5 * a, 0 > stageX && (stageX = 0), 0 > stageY ? stageY = 0 : stageY > 200 && (stageY = 200)), background.updateMove(stageX, stageY, a), background.render(ctx);
        var b = assetLib.getData("catShadow");
        ctx.drawImage(b.img, cat.x - b.img.width / 2, stageY + 360);
        for (var c = 0; c < aGElements.length; c++) aGElements[c].update(stageX, stageY, a), aGElements[c].render(ctx), 1 == gameTouchState && aGElements[c].canHit && aGElements[c].checkCollision(cat) && hitGElement(aGElements[c].id), aGElements[c].x < -200 && (aGElements.splice(c, 1), c -= 1);
        cat.update(flyX - stageX, flyY + stageY, a), cat.render(ctx), gauge.gaugeY < 300 && gauge.render(ctx);
        for (var c = 0; c < aParticles.length; c++) aParticles[c].update(stageX, stageY, a), aParticles[c].render(ctx), aParticles[c].removeMe && (aParticles.splice(c, 1), c -= 1);
        gapIncrease += 4 * a, flyX > nextElementX && (addGElement(), nextElementX = flyX + 300 * Math.random() + 250 + gapIncrease), hud.render(ctx), renderMuteBut(), requestAnimFrame(updateGameEvent)
    }
}

function updateCreditsScreenEvent() {
    if (!rotatePause && "credits" == gameState) {
        var a = getDelta();
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateCreditsScreenEvent)
    }
}

function updateGameEndEvent() {
    if (!rotatePause && "gameEnd" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateGameEndEvent)
    }
}

function updatePowerUpsEvent() {
    if (!rotatePause && "powerUps" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updatePowerUpsEvent)
    }
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        var a = getDelta();
        if (splashTimer += a, splashTimer > 2.5) return 1 != audioType || muted || music.play(), initStartScreen(), void 0;
        splash.render(ctx, a), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.render(ctx);
        for (var b = 0; b < aGElements.length; b++) aGElements[b].update(null, null, a), aGElements[b].render(ctx);
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}

function updateTutorialEvent() {
    if (!rotatePause && "tutorial" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateTutorialEvent)
    }
}

function toggleHudButs(a) {
    a ? (userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [644, 0, canvas.width, 54]
    }, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [587, 0, 635, 54]
    }, !0)) : (userInput.removeHitArea("mute"), userInput.removeHitArea("pause"))
}

function getDelta() {
    var a = (new Date).getTime(),
        b = (a - previousTime) / 1e3;
    return previousTime = a, b > .5 && (b = 0), b
}

function checkSpriteCollision(a, b) {
    var c = a.x,
        d = a.y,
        e = b.x,
        f = b.y,
        g = (c - e) * (c - e) + (d - f) * (d - f),
        h = a.radius * b.radius;
    return h > g ? !0 : !1
}

function getScaleImageToMax(a, b) {
    var c;
    return c = a.isSpriteSheet ? b[0] / a.oData.spriteWidth < b[1] / a.oData.spriteHeight ? Math.min(b[0] / a.oData.spriteWidth, 1) : Math.min(b[1] / a.oData.spriteHeight, 1) : b[0] / a.img.width < b[1] / a.img.height ? Math.min(b[0] / a.img.width, 1) : Math.min(b[1] / a.img.height, 1)
}

function getCentreFromTopLeft(a, b, c) {
    var d = new Array;
    return d.push(a[0] + b.oData.spriteWidth / 2 * c), d.push(a[1] + b.oData.spriteHeight / 2 * c), d
}

function loadPreAssets() {
    aLangs.length > 1 ? (preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "langSelect",
        file: "images/langSelect.jpg"
    }, {
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)) : (curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets))
}

function initLangSelect() {
    var a = preAssetLib.getData("langSelect");
    ctx.drawImage(a.img, canvas.width / 2 - a.img.width / 2, canvas.height / 2 - a.img.height / 2);
    for (var b = 140, c = 0; c < aLangs.length; c++) {
        var d = canvas.width / 2 - b * aLangs.length / 2 + c * b,
            e = canvas.height / 2 - b / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[c]
        }, "rect", {
            aRect: [d, e, d + b, e + 140]
        })
    }
}

function initLoadAssets() {
    var a = preAssetLib.getData("preloadImage");
    ctx.drawImage(a.img, 0, 0), loadAssets()
}

function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background",
        file: "images/background.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splashScreen",
        file: "images/splashScreen.jpg"
    }, {
        id: "hud",
        file: "images/hud.png"
    }, {
        id: "catShadow",
        file: "images/catShadow.png"
    }, {
        id: "pounceBar",
        file: "images/pounceBar.png"
    }, {
        id: "pounceBarHolder",
        file: "images/pounceBarHolder_251x63.png"
    }, {
        id: "uiButs",
        file: "images/" + curLang + "/uiButs.png",
        oAtlasData: {
            play: {
                x: 0,
                y: 200,
                width: 162,
                height: 86
            },
            credits: {
                x: 0,
                y: 288,
                width: 129,
                height: 70
            },
            back: {
                x: 188,
                y: 0,
                width: 129,
                height: 70
            },
            moreGames: {
                x: 131,
                y: 288,
                width: 129,
                height: 70
            },
            quit: {
                x: 164,
                y: 200,
                width: 129,
                height: 70
            },
            jump: {
                x: 0,
                y: 0,
                width: 186,
                height: 98
            },
            next: {
                x: 0,
                y: 100,
                width: 186,
                height: 98
            },
            powerUp25On: {
                x: 293,
                y: 131,
                width: 103,
                height: 57
            },
            powerUp25Off: {
                x: 293,
                y: 72,
                width: 103,
                height: 57
            },
            powerUp50On: {
                x: 105,
                y: 360,
                width: 103,
                height: 57
            },
            powerUp50Off: {
                x: 0,
                y: 360,
                width: 103,
                height: 57
            },
            powerUp100On: {
                x: 188,
                y: 72,
                width: 103,
                height: 57
            },
            powerUp100Off: {
                x: 188,
                y: 131,
                width: 103,
                height: 57
            },
            powerUp200On: {
                x: 262,
                y: 272,
                width: 103,
                height: 57
            },
            powerUp200Off: {
                x: 210,
                y: 360,
                width: 103,
                height: 57
            }
        }
    }, {
        id: "panels1",
        file: "images/" + curLang + "/panels1_700x400.png"
    }, {
        id: "panels2",
        file: "images/" + curLang + "/panels2_700x400.png"
    }, {
        id: "powerUpBar",
        file: "images/powerUpBar_157x56.png"
    }, {
        id: "scoreNumbers",
        file: "images/scoreNumbers_32x41.png"
    }, {
        id: "gauge",
        file: "images/gauge.png",
        oAtlasData: {
            gauge: {
                x: 0,
                y: 0,
                width: 246,
                height: 154
            },
            arrow: {
                x: 0,
                y: 156,
                width: 56,
                height: 110
            }
        }
    }, {
        id: "bird",
        file: "images/bird_89x60.png",
        oAnims: {
            flying: [0, 1, 2, 3, 4, 5, 6]
        }
    }, {
        id: "splash",
        file: "images/splash_154x176.png",
        oAnims: {
            splash: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    }, {
        id: "particle1",
        file: "images/particle1_106x98.png",
        oAnims: {
            exploding: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }, {
        id: "particle2",
        file: "images/particle2_156x139.png",
        oAnims: {
            exploding: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }, {
        id: "cat",
        file: "images/cat_160x126.png",
        oAnims: {
            waiting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            jumping: [12, 13, 14],
            moving: [15]
        }
    }, {
        id: "catSign",
        file: "images/catSign_189x177.png",
        oAnims: {
            signing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
    }, {
        id: "elements",
        file: "images/elements.png",
        oAtlasData: {
            ledge: {
                x: 0,
                y: 278,
                width: 207,
                height: 99
            },
            kite: {
                x: 210,
                y: 151,
                width: 174,
                height: 104
            },
            goal: {
                x: 0,
                y: 151,
                width: 208,
                height: 125
            },
            football: {
                x: 347,
                y: 0,
                width: 62,
                height: 62
            },
            footballShadow: {
                x: 0,
                y: 401,
                width: 86,
                height: 13
            },
            trampoline: {
                x: 0,
                y: 78,
                width: 214,
                height: 71
            },
            beachBall: {
                x: 228,
                y: 0,
                width: 117,
                height: 116
            },
            beachBallShadow: {
                x: 0,
                y: 379,
                width: 138,
                height: 20
            },
            pool: {
                x: 0,
                y: 0,
                width: 226,
                height: 76
            },
            kiteCat: {
                x: 209,
                y: 278,
                width: 205,
                height: 115
            }
        }
    }, {
        id: "muteBut",
        file: "images/mute_50x50.png"
    }], ctx, canvas.width, canvas.height), assetLib.onReady(initSplash)
}

function resizeCanvas() {
    var a = window.innerWidth,
        b = window.innerHeight;
    a > 480 && (a -= 1, b -= 1), window.innerWidth < window.innerHeight && isMobile ? ("loading" != gameState && rotatePauseOn(), canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : isMobile ? (rotatePause && rotatePauseOff(), canvasX = canvasY = 0, canvasScaleX = canvas.width / a, canvasScaleY = canvas.height / b, canvas.style.width = a + "px", canvas.style.height = b + "px", div.style.marginTop = "0px", div.style.marginLeft = "0px") : (rotatePause && rotatePauseOff(), a / canvas.width < b / canvas.height ? (canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = b / canvas.height * canvas.width + "px", canvas.style.height = b + "px", canvasX = (a - b / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / b, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")), userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY)
}

function playSound(a) {
    1 == audioType && sound.play(a)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? Howler.mute() : Howler.unmute() : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}

function renderMuteBut() {
    if (0 != audioType) {
        var a = assetLib.getData("muteBut"),
            b = 0;
        muted && (b = 1);
        var c = b * a.oData.spriteWidth % a.img.width,
            d = Math.floor(b / (a.img.width / a.oData.spriteWidth)) * a.oData.spriteHeight;
        ctx.drawImage(a.img, c, d, a.oData.spriteWidth, a.oData.spriteHeight, 643, 6, a.oData.spriteWidth, a.oData.spriteHeight)
    }
}

function toggleManualPause() {
    if (manualPause) manualPause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var a = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2 - 225, 345],
                id: "quit"
            },
            b = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 345],
                id: "play"
            },
            c = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2 + 225, 345],
                id: "moreGames"
            };
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", a), userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", b), userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", c);
        var d = new Array(a, b, c);
        panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("numbers"), assetLib.getData("powerUpBar"), "pause", d, canvas.width, canvas.height), panel.render(ctx), userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [587, 0, 635, 54]
        }, !0)
    }
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
            break;
        case "tutorial":
            break;
        case "game":
            userInput.removeHitArea("jump"), userInput.removeHitArea("pounce");
            break;
        case "gameEnd":
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "tutorial":
            initPreGame();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "game":
            if (manualPause = !1, 0 == gameTouchState) {
                var a = {
                    oImgData: assetLib.getData("uiButs"),
                    aPos: [580, 315],
                    id: "jump"
                };
                userInput.addHitArea("jump", butEventHandler, null, "image", a)
            } else userInput.addHitArea("pounce", butEventHandler, null, "rect", {
                aRect: [0, 60, canvas.width, canvas.height]
            }, !0);
            updateGameEvent();
            break;
        case "powerUps":
            initPowerUps();
            break;
        case "gameEnd":
            initGameEnd()
    }
}
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.totalAssets = b.length, this.ctx = c, this.canvasWidth = d, this.canvasHeight = e, this.showBar = f, this.topLeftX = this.canvasWidth / 2 - d / 8, this.topLeftY = 230, this.showBar && (ctx.strokeStyle = "#333646", ctx.lineWidth = 2, ctx.fillStyle = "#F5A343", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + d / 4, this.topLeftY + 0), ctx.lineTo(this.topLeftX + d / 4, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var g = 0; g < b.length; g++) this.loadImage(b[g])
        }
        return a.prototype.loadImage = function(a) {
            var b = this,
                c = new Image;
            c.onload = function() {
                b.oAssetData[a.id] = {}, b.oAssetData[a.id].img = c, b.oAssetData[a.id].oData = {};
                var d = b.getSpriteSize(a.file);
                0 != d[0] ? (b.oAssetData[a.id].oData.spriteWidth = d[0], b.oAssetData[a.id].oData.spriteHeight = d[1]) : (b.oAssetData[a.id].oData.spriteWidth = b.oAssetData[a.id].img.width, b.oAssetData[a.id].oData.spriteHeight = b.oAssetData[a.id].img.height), a.oAnims && (b.oAssetData[a.id].oData.oAnims = a.oAnims), a.oAtlasData && (b.oAssetData[a.id].oData.oAtlasData = a.oAtlasData), ++b.assetsLoaded, b.showBar && ctx.fillRect(b.topLeftX + 2, b.topLeftY + 2, (b.canvasWidth / 4 - 4) / b.totalAssets * b.assetsLoaded, 16), b.checkLoadComplete()
            }, c.src = a.file
        }, a.prototype.getSpriteSize = function(a) {
            for (var b = new Array, c = "", d = "", e = 0, f = a.lastIndexOf("."), g = !0; g;) f--, 0 == e && this.isNumber(a.charAt(f)) ? c = a.charAt(f) + c : 0 == e && c.length > 0 && "x" == a.charAt(f) ? (f--, e = 1, d = a.charAt(f) + d) : 1 == e && this.isNumber(a.charAt(f)) ? d = a.charAt(f) + d : 1 == e && d.length > 0 && "_" == a.charAt(f) ? (g = !1, b = [parseInt(d), parseInt(c)]) : (g = !1, b = [0, 0]);
            return b
        }, a.prototype.isNumber = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, a.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, a.prototype.onReady = function(a) {
            this.loadedCallback = a
        }, a.prototype.getImg = function(a) {
            return this.oAssetData[a].img
        }, a.prototype.getData = function(a) {
            return this.oAssetData[a]
        }, a
    }();
    a.AssetLoader = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.saveDataId = a, this.totalLevels = b, this.clearData(), this.setInitialData()
        }
        return a.prototype.clearData = function() {
            this.aLevelStore = new Array;
            for (var a = 0; a < this.totalLevels; a++) this.aLevelStore.push(0)
        }, a.prototype.setInitialData = function() {
            if ("undefined" != typeof Storage)
                if (null != localStorage.getItem(this.saveDataId)) {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for (var a in this.aLevelStore) this.aLevelStore[a] = parseInt(this.aLevelStore[a])
                } else this.saveData()
        }, a.prototype.saveData = function() {
            if ("undefined" != typeof Storage) {
                for (var a = "", b = 0; b < this.aLevelStore.length; b++) a += this.aLevelStore[b], b < this.aLevelStore.length - 1 && (a += ",");
                localStorage.setItem(this.saveDataId, a)
            }
        }, a
    }();
    a.SaveDataHandler = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c, d) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.fps = b, this.radius = c, this.animId = d, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
        }
        return a.prototype.updateAnimation = function(a) {
            this.frameInc += this.fps * a
        }, a.prototype.changeImgData = function(a, b) {
            this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.animId = b, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2), this.resetAnim()
        }, a.prototype.resetAnim = function() {
            this.frameInc = 0
        }, a.prototype.setFrame = function(a) {
            this.fixedFrame = a
        }, a.prototype.setAnimType = function(a, b, c) {
            switch ("undefined" == typeof c && (c = !0), this.animId = b, this.animType = a, c && this.resetAnim(), a) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, a.prototype.render = function(a) {
            if (a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY), null != this.animId) {
                var b = this.oAnims[this.animId].length,
                    c = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][c % b];
                var d = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    e = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && c > this.maxIdx) {
                    if (this.fixedFrame = this.oAnims[this.animId][b - 1], this.animId = null, null != this.animEndedFunc) return this.animEndedFunc(), a.restore(), void 0;
                    var d = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        e = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var d = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                e = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, d, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.AnimSprite = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            "undefined" == typeof c && (c = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.radius = b, this.setFrame(c)
        }
        return a.prototype.setFrame = function(a) {
            this.frameNum = a
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY);
            var b = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                c = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, b, c, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.BasicSprite = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b) {
            var c = this;
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isDetectingKeys = !1, this.isBugBrowser = b, a.addEventListener("touchstart", function(a) {
                for (var b = 0; b < a.changedTouches.length; b++) c.hitDown(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchend", function(a) {
                for (var b = 0; b < a.changedTouches.length; b++) c.hitUp(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchmove", function(a) {
                for (var b = 0; b < c.aHitAreas.length; b++) c.move(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier, !0)
            }, !1), a.addEventListener("mousedown", function(a) {
                c.isDown = !0, c.hitDown(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mouseup", function(a) {
                c.isDown = !1, c.hitUp(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mousemove", function(a) {
                c.move(a, a.pageX, a.pageY, 1, c.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return a.prototype.setCanvas = function(a, b, c, d) {
            this.canvasX = a, this.canvasY = b, this.canvasScaleX = c, this.canvasScaleY = d
        }, a.prototype.hitDown = function(a, b, c, d) {
            if (!this.pauseIsOn) {
                var e = (new Date).getTime();
                if (!(e - this.prevHitTime < 500 && isBugBrowser)) {
                    this.prevHitTime = e, a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                    for (var f = 0; f < this.aHitAreas.length; f++)
                        if (this.aHitAreas[f].rect && b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3]) {
                            this.aHitAreas[f].aTouchIdentifiers.push(d), this.aHitAreas[f].oData.hasLeft = !1, this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData));
                            break
                        }
                }
            }
        }, a.prototype.hitUp = function(a, b, c, d) {
            if (!this.pauseIsOn) {
                a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var e = 0; e < this.aHitAreas.length; e++)
                    if (this.aHitAreas[e].rect && b > this.aHitAreas[e].area[0] && c > this.aHitAreas[e].area[1] && b < this.aHitAreas[e].area[2] && c < this.aHitAreas[e].area[3]) {
                        for (var f = 0; f < this.aHitAreas[e].aTouchIdentifiers.length; f++) this.aHitAreas[e].aTouchIdentifiers[f] == d && (this.aHitAreas[e].aTouchIdentifiers.splice(f, 1), f -= 1);
                        0 == this.aHitAreas[e].aTouchIdentifiers.length && (this.aHitAreas[e].oData.isDown = !1, this.aHitAreas[e].oData.multiTouch && this.aHitAreas[e].callback(this.aHitAreas[e].id, this.aHitAreas[e].oData));
                        break
                    }
            }
        }, a.prototype.move = function(a, b, c, d, e) {
            if (!this.pauseIsOn && e) {
                b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var f = 0; f < this.aHitAreas.length; f++)
                    if (this.aHitAreas[f].rect)
                        if (b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3]) this.aHitAreas[f].oData.hasLeft = !1, this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].aTouchIdentifiers.push(d), this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData)), this.aHitAreas[f].oData.isDraggable && (this.aHitAreas[f].oData.isBeingDragged = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData), this.aHitAreas[f].oData.isBeingDragged = !1);
                        else if (this.aHitAreas[f].oData.isDown && !this.aHitAreas[f].oData.hasLeft) {
                    for (var g = 0; g < this.aHitAreas[f].aTouchIdentifiers.length; g++) this.aHitAreas[f].aTouchIdentifiers[g] == d && (this.aHitAreas[f].aTouchIdentifiers.splice(g, 1), g -= 1);
                    0 == this.aHitAreas[f].aTouchIdentifiers.length && (this.aHitAreas[f].oData.hasLeft = !0, this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData))
                }
            }
        }, a.prototype.keyDown = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !0, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.keyUp = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !1, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.addKey = function(a, b, c, d) {
            var e = this;
            this.isDetectingKeys || (window.addEventListener("keydown", function(a) {
                e.keyDown(a)
            }, !1), window.addEventListener("keyup", function(a) {
                e.keyUp(a)
            }, !1), this.isDetectingKeys = !0), null == c && (c = new Object), this.aKeys.push({
                id: a,
                callback: b,
                oData: c,
                keyCode: d
            })
        }, a.prototype.removeKey = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) this.aKeys[b].id == a && (this.aKeys.splice(b, 1), b -= 1)
        }, a.prototype.addHitArea = function(a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !1), null == c && (c = new Object), f && this.removeHitArea(a);
            var g = new Array;
            switch (d) {
                case "image":
                    var h;
                    h = new Array(e.aPos[0] - e.oImgData.oData.oAtlasData[e.id].width / 2, e.aPos[1] - e.oImgData.oData.oAtlasData[e.id].height / 2, e.aPos[0] + e.oImgData.oData.oAtlasData[e.id].width / 2, e.aPos[1] + e.oImgData.oData.oAtlasData[e.id].height / 2), this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: g,
                        callback: b,
                        oData: c,
                        rect: !0,
                        area: h
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: g,
                        callback: b,
                        oData: c,
                        rect: !0,
                        area: e.aRect
                    })
            }
        }, a.prototype.removeHitArea = function(a) {
            for (var b = 0; b < this.aHitAreas.length; b++) this.aHitAreas[b].id == a && (this.aHitAreas.splice(b, 1), b -= 1)
        }, a
    }();
    a.UserInput = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(a) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), a.textAlign = "left", ctx.font = "10px Helvetica", a.fillStyle = "#333333", a.beginPath(), a.rect(0, this.canvasHeight - 15, 40, 15), a.closePath(), a.fill(), a.fillStyle = "#ffffff", a.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = a
        }
        return a.prototype.update = function(a) {
            this.delta = a
        }, a
    }();
    a.FpsMeter = b
}(Utils || (Utils = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.scrollX = 0, this.scrollSpeedX = 500, this.aSegs = new Array, this.oImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.aSegs = [0, 317, 433, 450, 472, 499, 533, 572, 600]
        }
        return a.prototype.updateScroll = function(a) {
            this.scrollX += this.scrollSpeedX * a, this.scrollY = 0
        }, a.prototype.updateMove = function(a, b) {
            this.scrollX = a, this.scrollY = b
        }, a.prototype.render = function(a) {
            for (var b = this.aSegs.length - 1, c = 0; b > c; c++) a.drawImage(this.oImgData.img, this.scrollX * ((c + 1) / b) % this.canvasWidth, this.aSegs[c], this.canvasWidth, this.aSegs[c + 1] - this.aSegs[c], 0, this.aSegs[c] + this.scrollY - 200, this.canvasWidth, this.aSegs[c + 1] - this.aSegs[c])
        }, a
    }();
    a.Background = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.inc = 0, this.oSplashScreenImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return a.prototype.render = function(a, b) {
            this.inc += 5 * b, a.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, a
    }();
    a.Splash = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f, g, h) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.letterSpace = 25, this.incY = 0, this.aPowerUpBarPos = new Array({
                x: 135,
                y: 150
            }, {
                x: 448,
                y: 150
            }, {
                x: 135,
                y: 250
            }, {
                x: 448,
                y: 250
            }), this.oPanels1ImgData = a, this.oPanels2ImgData = b, this.oNumbersImgData = c, this.oPowerUpBarImgData = d, this.panelType = e, this.aButs = f, this.canvasWidth = g, this.canvasHeight = h
        }
        return a.prototype.update = function(a) {
            this.incY += 5 * a
        }, a.prototype.startTween1 = function() {
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, a.prototype.startTween2 = function() {
            this.posY = 550, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            })
        }, a.prototype.render = function(a, b) {
            switch ("undefined" == typeof b && (b = !0), b || this.addButs(a), this.panelType) {
                case "start":
                    var c = 0,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "credits":
                    var c = 1,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "gameEnd":
                    var c = 0,
                        d = c * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width,
                        e = Math.floor(c / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, d, e, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var f = this.oScoreData.dist, g = 0; g <= f.toString().length; g++) {
                        c = g < f.toString().length ? parseFloat(f.toString().charAt(g)) : 10;
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 360 + g * this.letterSpace, 100 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var f = this.oScoreData.airTime, g = 0; g <= f.toString().length; g++) {
                        c = g < f.toString().length ? parseFloat(f.toString().charAt(g)) : 10;
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 360 + g * this.letterSpace, 147 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var f = this.oScoreData.objectsHit, g = 0; g < f.toString().length; g++) {
                        c = parseFloat(f.toString().charAt(g));
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 360 + g * this.letterSpace, 194 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var f = this.oScoreData.starBonus, g = 0; g < f.toString().length; g++) {
                        c = parseFloat(f.toString().charAt(g));
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 360 + g * this.letterSpace, 241 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var f = this.oScoreData.starTotal, g = 0; g < f.toString().length; g++) {
                        c = parseFloat(f.toString().charAt(g));
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 582 + g * this.letterSpace, 289 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var f = this.oScoreData.longestDist, g = 0; g <= f.toString().length; g++) {
                        c = g < f.toString().length ? parseFloat(f.toString().charAt(g)) : 10;
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 155 + g * this.letterSpace / 1.7, 303 + this.posY, this.oNumbersImgData.oData.spriteWidth / 1.7, this.oNumbersImgData.oData.spriteHeight / 1.7)
                    }
                    break;
                case "powerUps":
                    var c = 1,
                        d = c * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width,
                        e = Math.floor(c / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, d, e, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var f = this.oScoreData.starTotal, g = 0; g < f.toString().length; g++) {
                        c = parseFloat(f.toString().charAt(g));
                        var d = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            e = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 582 + g * this.letterSpace, 289 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var g = 0; g < this.oScoreData.aPowerUpBarData.length; g++) {
                        c = this.oScoreData.aPowerUpBarData[g];
                        var d = c * this.oPowerUpBarImgData.oData.spriteWidth % this.oPowerUpBarImgData.img.width,
                            e = Math.floor(c / (this.oPowerUpBarImgData.img.width / this.oPowerUpBarImgData.oData.spriteWidth)) * this.oPowerUpBarImgData.oData.spriteHeight;
                        a.drawImage(this.oPowerUpBarImgData.img, d, e, this.oPowerUpBarImgData.oData.spriteWidth, this.oPowerUpBarImgData.oData.spriteHeight, this.aPowerUpBarPos[g].x - this.oPowerUpBarImgData.oData.spriteWidth / 2, this.aPowerUpBarPos[g].y - this.oPowerUpBarImgData.oData.spriteHeight / 2 + this.posY, this.oPowerUpBarImgData.oData.spriteWidth, this.oPowerUpBarImgData.oData.spriteHeight)
                    }
                    break;
                case "tutorial1":
                    var c = 2,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "tutorial2":
                    var c = 3,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "pause":
                    a.fillStyle = "rgba(0, 0, 0, 0.75)", a.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
            }
            b && this.addButs(a)
        }, a.prototype.addButs = function(a) {
            for (var b = 0; b < this.aButs.length; b++) {
                var c = this.posY,
                    d = 0;
                0 != this.incY && (d = 3 * Math.sin(this.incY + 45 * b));
                var e = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].x,
                    f = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].y,
                    g = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].width,
                    h = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].height;
                a.drawImage(this.aButs[b].oImgData.img, e, f, g, h, this.aButs[b].aPos[0] - g / 2 + c, this.aButs[b].aPos[1] - h / 2 - d, g, h)
            }
        }, a
    }();
    a.Panel = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e) {
            this.dist = 0, this.bonusScore = 0, this.letterSpace = 25, this.pounceBarScale = 1, this.recoverTime = 5, this.moveY = -75, this.oHudImgData = a, this.oPounceBarHolderImgData = b, this.oPounceBarImgData = c, this.oNumbersImgData = d, this.starTotal = e
        }
        return a.prototype.pounce = function() {
            return 1 == this.pounceBarScale ? (this.pounceBarScale = 0, TweenLite.to(this, this.recoverTime, {
                pounceBarScale: 1,
                ease: "Linear.easeNone",
                onComplete: playSound,
                onCompleteParams: ["pounceReset"]
            }), !0) : !1
        }, a.prototype.showHud = function() {
            TweenLite.to(this, .8, {
                moveY: 0,
                ease: "Back.easeOut"
            })
        }, a.prototype.hideHud = function() {
            0 == this.moveY && TweenLite.to(this, .8, {
                moveY: -75,
                ease: "Back.easeIn"
            })
        }, a.prototype.render = function(a) {
            var b;
            a.drawImage(this.oHudImgData.img, 0, 0);
            for (var b, c = 0; c <= this.dist.toString().length; c++) {
                b = c < this.dist.toString().length ? parseFloat(this.dist.toString().charAt(c)) : 10;
                var d = b * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    e = Math.floor(b / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 340 + c * this.letterSpace - this.letterSpace * (this.dist.toString().length + 1) / 2, 10 + this.moveY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
            }
            for (var c = 0; c < this.starTotal.toString().length; c++) {
                b = parseFloat(this.starTotal.toString().charAt(c));
                var d = b * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    e = Math.floor(b / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                a.drawImage(this.oNumbersImgData.img, d, e, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 490 + c * this.letterSpace, 10, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
            }
            b = this.pounceBarScale < 1 ? 1 : 0;
            var d = b * this.oPounceBarHolderImgData.oData.spriteWidth % this.oPounceBarHolderImgData.img.width,
                e = Math.floor(b / (this.oPounceBarHolderImgData.img.width / this.oPounceBarHolderImgData.oData.spriteWidth)) * this.oPounceBarHolderImgData.oData.spriteHeight;
            a.drawImage(this.oPounceBarHolderImgData.img, d, e, this.oPounceBarHolderImgData.oData.spriteWidth, this.oPounceBarHolderImgData.oData.spriteHeight, 0, 0 + this.moveY, this.oPounceBarHolderImgData.oData.spriteWidth, this.oPounceBarHolderImgData.oData.spriteHeight), a.drawImage(this.oPounceBarImgData.img, 0, 0, Math.max(this.pounceBarScale * this.oPounceBarImgData.oData.spriteWidth, 1), this.oPounceBarImgData.oData.spriteHeight, 46, 14 + this.moveY, this.pounceBarScale * this.oPounceBarImgData.oData.spriteWidth, this.oPounceBarImgData.oData.spriteHeight)
        }, a
    }();
    a.Hud = b
}(Elements || (Elements = {}));
var __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        c.prototype = b.prototype, a.prototype = new c
    },
    Elements;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e) {
            a.call(this, b, 20, 30, "flying"), this.incY = 100 * Math.random(), this.incX = 100 * Math.random() + 50, this.canHit = !0, this.canvasWidth = d, this.id = e, "menu" == c ? this.updateFunc = this.autoFlying : "game" == c && (this.updateFunc = this.hovering), this.setFrame(Math.floor(6 * Math.random()))
        }
        return __extends(b, a), b.prototype.update = function(b, c, d) {
            a.prototype.updateAnimation.call(this, d), this.updateFunc(b, c, d)
        }, b.prototype.checkCollision = function(a) {
            var b = checkSpriteCollision(this, a);
            return b && (TweenLite.to(this, .8, {
                startY: -200,
                ease: "Back.easeIn"
            }), this.canHit = !1), b
        }, b.prototype.autoFlying = function(a, b, c) {
            this.incY += 3 * c, this.y += 1 * Math.sin(this.incY), this.x -= this.incX * c, this.rotation = .1 * Math.sin(this.incY), this.x < -50 && (this.x = this.canvasWidth + 50, this.y = 250 * Math.random(), this.incY = 100 * Math.random(), this.incX = 100 * Math.random() + 50)
        }, b.prototype.hovering = function(a, b, c) {
            this.canHit ? (this.incY += 3 * c, this.startY += 1 * Math.sin(this.incY), this.y = this.startY + b, this.x = -a + this.startX, this.rotation = .1 * Math.sin(this.incY)) : (this.x = -a + this.startX, this.y = b + this.startY, this.rotation += c)
        }, b
    }(Utils.AnimSprite);
    a.Bird = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g, h) {
            a.call(this, b, 25, 60, "waiting"), this.letterSpace = 25, this.hideCat = !1, this.oSignImgData = c, this.oNumbersImgData = d, this.oButImgData = e, this.canvasWidth = f, this.canvasHeight = g, this.callBack = h, this.offsetX = 33, this.offsetY = -55, this.y = 300, this.x = 42, this.updateFunc = this.updateWaiting, this.renderFunc = this.renderInGame
        }
        return __extends(b, a), b.prototype.changeState = function(a, b) {
            switch ("undefined" == typeof b && (b = null), a) {
                case "jumping":
                    this.setAnimType("once", "jumping"), this.animEndedFunc = function() {
                        this.changeState("moving")
                    };
                    break;
                case "moving":
                    this.setAnimType("loop", "moving", !0), this.x += 90, this.y -= 90, this.offsetX = 0, this.offsetY = -14, this.updateFunc = this.updateMoving, this.callBack("moving");
                    break;
                case "showSign":
                    this.dist = b.dist, this.rotation = 0, this.y -= 25, this.changeImgData(this.oSignImgData, "signing"), this.updateFunc = this.updateWaiting, this.renderFunc = this.renderSign, this.butY = 200, this.oNextBut = {
                        oImgData: this.oButImgData,
                        aPos: [580, 315],
                        id: "next"
                    }, TweenLite.to(this, .5, {
                        butY: 0,
                        ease: "Back.easeOut",
                        onComplete: this.setNextBut,
                        onCompleteParams: [this]
                    });
                    break;
                case "kiteCatOn":
                    this.hideCat = !0;
                    break;
                case "kiteCatOff":
                    this.hideCat = !1
            }
        }, b.prototype.setNextBut = function(a) {
            userInput.addHitArea("nextFromJumpEnd", butEventHandler, null, "image", a.oNextBut)
        }, b.prototype.update = function(b, c, d) {
            a.prototype.updateAnimation.call(this, d), this.updateFunc(b, c, d)
        }, b.prototype.updateWaiting = function() {}, b.prototype.updateMoving = function(a, b) {
            this.x = a, this.y = b, this.rotation = (a + stageX) / 50
        }, b.prototype.render = function(b) {
            this.hideCat || (a.prototype.render.call(this, b), this.renderFunc(b))
        }, b.prototype.renderInGame = function() {}, b.prototype.renderSign = function(b) {
            a.prototype.render.call(this, b);
            for (var c, d = 0; d <= this.dist.toString().length; d++) {
                c = d < this.dist.toString().length ? parseFloat(this.dist.toString().charAt(d)) : 10;
                var e = c * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    f = Math.floor(c / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                b.drawImage(this.oNumbersImgData.img, e, f, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.x + d * this.letterSpace - this.letterSpace * (this.dist.toString().length + 1) / 2, this.y - 20, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
            }
            var g = this.oNextBut.oImgData.oData.oAtlasData[this.oNextBut.id].x,
                h = this.oNextBut.oImgData.oData.oAtlasData[this.oNextBut.id].y,
                i = this.oNextBut.oImgData.oData.oAtlasData[this.oNextBut.id].width,
                j = this.oNextBut.oImgData.oData.oAtlasData[this.oNextBut.id].height;
            b.drawImage(this.oNextBut.oImgData.img, g, h, i, j, this.oNextBut.aPos[0] - i / 2, this.oNextBut.aPos[1] - j / 2 + this.butY, i, j)
        }, b
    }(Utils.AnimSprite);
    a.Cat = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.canHit = !1, this.oImgData = a, this.id = b
        }
        return a.prototype.update = function(a, b) {
            this.x = -a + this.startX, this.y = b + this.startY
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e, d, e), a.restore()
        }, a
    }();
    a.Ledge = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radius = 70, this.canHit = !0, this.inc = 0, this.knockedOff = !1, this.oImgData = a, this.id = b, this.rotation = 360 * Math.random()
        }
        return a.prototype.checkCollision = function(a) {
            var b = checkSpriteCollision(this, a);
            return b && (gElementAttached && gElementAttached.dislodge(), catCallBack("kiteCatOn"), this.rotation = 0, this.id = "kiteCat", gElementAttached = this, this.prevCatY = cat.y, this.canHit = !1), b
        }, a.prototype.dislodge = function() {
            catCallBack("kiteCatOff"), this.id = "kite", gElementAttached = null, this.knockedOff = !0, TweenLite.to(this, .5, {
                y: 500,
                x: -100,
                ease: "Quad.easeIn"
            })
        }, a.prototype.update = function(a, b, c) {
            this.canHit ? (this.x = -a + this.startX, this.y = b + this.startY, this.rotation += c) : this.knockedOff ? this.rotation -= c : (this.targRot = (cat.y - this.prevCatY) / 5, this.rotation -= (this.rotation - this.targRot) / .5 * c, this.y = cat.y - 25 * Math.sin(this.rotation), this.x = cat.x - 25 * Math.cos(this.rotation), this.prevCatY = cat.y)
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore()
        }, a
    }();
    a.Kite = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radius = 65, this.canHit = !0, this.oImgData = a, this.id = b, this.rotation = 360 * Math.random()
        }
        return a.prototype.checkCollision = function(a) {
            var b = !1;
            return a.x > this.x - this.radius && a.x < this.x + this.radius && cat.y > this.y - 2 * this.radius && (b = !0, this.canHit = !1), b
        }, a.prototype.update = function(a, b, c) {
            this.x = -a + this.startX, this.y = b + this.startY, this.rotation += c
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e, d, e), a.restore()
        }, a
    }();
    a.Goal = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radius = 30, this.canHit = !0, this.incX = Math.random() + 300 * Math.random(), this.incY = 0, this.oImgData = a, this.id = b, this.rotation = 360 * Math.random()
        }
        return a.prototype.checkCollision = function(a) {
            var b = checkSpriteCollision(this, a);
            return b && (this.canHit = !1, a.y > this.y ? this.incY = -1e3 : a.y < this.y && (this.incY = 1e3)), b
        }, a.prototype.update = function(a, b, c) {
            this.incY += 500 * c, this.startX += this.incX * c, this.startY += this.incY * c, this.x = -a + this.startX, this.y = b + this.startY, this.startY > 340 && (this.startY = 340, this.incY *= -1), this.shadowY = b + 370, this.rotation = this.startX / 75
        }, a.prototype.render = function(a) {
            var b = this.oImgData.oData.oAtlasData[this.id + "Shadow"].x,
                c = this.oImgData.oData.oAtlasData[this.id + "Shadow"].y,
                d = this.oImgData.oData.oAtlasData[this.id + "Shadow"].width,
                e = this.oImgData.oData.oAtlasData[this.id + "Shadow"].height;
            a.drawImage(this.oImgData.img, b, c, d, e, this.x - d / 2, this.shadowY - e / 2, d, e), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore()
        }, a
    }();
    a.Football = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radius = 105, this.canHit = !0, this.oImgData = a, this.id = b
        }
        return a.prototype.checkCollision = function(a) {
            var b = !1;
            return a.x > this.x - this.radius && a.x < this.x + this.radius && cat.y > this.y - this.radius && (b = !0, this.canHit = !1), b
        }, a.prototype.update = function(a, b) {
            this.x = -a + this.startX, this.y = b + this.startY
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e, d, e), a.restore()
        }, a
    }();
    a.Trampoline = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radius = 70, this.canHit = !0, this.incX = Math.random() + 300 * Math.random(), this.incY = 0, this.oImgData = a, this.id = b, this.rotation = 360 * Math.random()
        }
        return a.prototype.checkCollision = function(a) {
            var b = checkSpriteCollision(this, a);
            return b && (this.canHit = !1, a.y > this.y ? this.incY = -1e3 : a.y < this.y && (this.incY = 1e3)), b
        }, a.prototype.update = function(a, b, c) {
            this.incY += 300 * c, this.startX += this.incX * c, this.startY += this.incY * c, this.x = -a + this.startX, this.y = b + this.startY, this.startY > 310 && (this.startY = 310, this.incY *= -1), this.shadowY = b + 370, this.rotation = this.startX / 75
        }, a.prototype.render = function(a) {
            var b = this.oImgData.oData.oAtlasData[this.id + "Shadow"].x,
                c = this.oImgData.oData.oAtlasData[this.id + "Shadow"].y,
                d = this.oImgData.oData.oAtlasData[this.id + "Shadow"].width,
                e = this.oImgData.oData.oAtlasData[this.id + "Shadow"].height;
            a.drawImage(this.oImgData.img, b, c, d, e, this.x - d / 2, this.shadowY - e / 2, d, e), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore()
        }, a
    }();
    a.BeachBall = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.radius = 80, this.canHit = !0, this.splashAnim = null, this.oImgData = a, this.oSplashImgData = b, this.id = c
        }
        return a.prototype.checkCollision = function(a) {
            var b = !1;
            if (a.x > this.x - this.radius && a.x < this.x + this.radius && cat.y > this.y - this.radius) {
                b = !0, this.canHit = !1, this.splashAnim = new Utils.AnimSprite(this.oSplashImgData, 15, 0, "splash"), this.splashAnim.setAnimType("once", "splash");
                var c = this;
                this.splashAnim.animEndedFunc = function() {
                    c.removeSplashAnim()
                }
            }
            return b
        }, a.prototype.removeSplashAnim = function() {
            this.splashAnim = null
        }, a.prototype.update = function(a, b, c) {
            this.splashAnim && (this.splashAnim.x = this.x, this.splashAnim.y = this.y - 120, this.splashAnim.updateAnimation(c)), this.x = -a + this.startX, this.y = b + this.startY
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y);
            var b = this.oImgData.oData.oAtlasData[this.id].x,
                c = this.oImgData.oData.oAtlasData[this.id].y,
                d = this.oImgData.oData.oAtlasData[this.id].width,
                e = this.oImgData.oData.oAtlasData[this.id].height;
            a.drawImage(this.oImgData.img, b, c, d, e, -d / 2, -e, d, e), a.restore(), this.splashAnim && this.splashAnim.render(a)
        }, a
    }();
    a.Pool = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.radian = Math.PI / 180, this.butScale = 1, this.gaugeY = 0, this.oGaugeImgData = a, this.oButImgData = b, this.rotation = 90, this.tween = TweenLite.to(this, 1, {
                rotation: -90,
                ease: "Quad.easeInOut",
                onComplete: this.swingBack,
                onCompleteParams: [this]
            }), this.oJumpBut = {
                oImgData: this.oButImgData,
                aPos: [580, 315],
                id: "jump"
            }, userInput.addHitArea("jump", butEventHandler, null, "image", this.oJumpBut)
        }
        return a.prototype.changeState = function(a) {
            switch (a) {
                case "jumping":
                    this.tween.kill(), this.butScale = 1.2, TweenLite.to(this, .2, {
                        butScale: 0,
                        ease: "Quad.easeIn"
                    });
                    break;
                case "moving":
                    this.tween.kill(), TweenLite.to(this, .5, {
                        gaugeY: 300,
                        ease: "Quad.easeIn",
                        delay: .3
                    });
                    break;
                case "showNextBut":
                    this.tween.kill(), TweenLite.to(this, .5, {
                        gaugeY: 300,
                        ease: "Quad.easeIn",
                        delay: .3
                    })
            }
        }, a.prototype.swingBack = function(a) {
            var b = 90;
            90 == a.rotation && (b = -90), a.tween = TweenLite.to(a, 1, {
                rotation: b,
                ease: "Quad.easeInOut",
                onComplete: a.swingBack,
                onCompleteParams: [a]
            })
        }, a.prototype.getPower = function() {
            return 1 / 90 * (Math.max(60 - Math.abs(this.rotation), 0) + 30)
        }, a.prototype.render = function(a) {
            var b = this.oGaugeImgData.oData.oAtlasData.gauge.x,
                c = this.oGaugeImgData.oData.oAtlasData.gauge.y,
                d = this.oGaugeImgData.oData.oAtlasData.gauge.width,
                e = this.oGaugeImgData.oData.oAtlasData.gauge.height;
            a.drawImage(this.oGaugeImgData.img, b, c, d, e, 325 - d / 2, 200 + this.gaugeY, d, e), a.save(), a.translate(325, 200), a.rotate(this.rotation * this.radian);
            var b = this.oGaugeImgData.oData.oAtlasData.arrow.x,
                c = this.oGaugeImgData.oData.oAtlasData.arrow.y,
                d = this.oGaugeImgData.oData.oAtlasData.arrow.width,
                e = this.oGaugeImgData.oData.oAtlasData.arrow.height;
            a.drawImage(this.oGaugeImgData.img, b, c, d, e, -d / 2, -10 + this.gaugeY, d, e), a.restore();
            var b = this.oJumpBut.oImgData.oData.oAtlasData[this.oJumpBut.id].x,
                c = this.oJumpBut.oImgData.oData.oAtlasData[this.oJumpBut.id].y,
                d = this.oJumpBut.oImgData.oData.oAtlasData[this.oJumpBut.id].width,
                e = this.oJumpBut.oImgData.oData.oAtlasData[this.oJumpBut.id].height;
            a.drawImage(this.oJumpBut.oImgData.img, b, c, d, e, this.oJumpBut.aPos[0] - d / 2 * this.butScale, this.oJumpBut.aPos[1] - e / 2 * this.butScale, d * this.butScale, e * this.butScale)
        }, a
    }();
    a.Gauge = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function(a) {
        function b(b, c) {
            a.call(this, b, 20, 45, "exploding"), this.setAnimType("once", "exploding"), this.animEndedFunc = function() {
                this.removeMe = !0
            }, TweenLite.to(this, .5, {
                x: c,
                scaleX: 2,
                scaleY: 2,
                ease: "Linear.easeNone"
            })
        }
        return __extends(b, a), b.prototype.update = function(b, c, d) {
            a.prototype.updateAnimation.call(this, d)
        }, b
    }(Utils.AnimSprite);
    a.Particle = b
}(Elements || (Elements = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 700, canvas.height = 400;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("viewporter"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, document.addEventListener("visibilitychange", function() {
    document.hidden ? Howler.mute() : muted || Howler.unmute()
}, !1), window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas()
        }, 500)
    }, !1)
}), isIE10 || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? (audioType = 0, music = new Audio("audio/music.ogg"), music.addEventListener("ended", function() {
    this.currentTime = 0, this.play()
}, !1), music.play()) : (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        splash: [0, 2e3],
        beachBall: [2500, 600],
        jumpEnd: [3500, 1e3],
        powerUpClick: [5e3, 900],
        goal: [6500, 700],
        football: [7500, 1200],
        trampoline: [9e3, 1400],
        bird1: [11e3, 700],
        bird2: [12500, 700],
        bird3: [14e3, 800],
        ground: [15500, 300],
        click: [16500, 200],
        loseKite: [17e3, 900],
        hitKite: [18500, 900],
        bigJump: [2e4, 1500],
        normalJump: [22e3, 1100],
        pounce: [24e3, 500],
        pounceReset: [25e3, 700]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.m4a"],
    volume: .2,
    loop: !0
}));
var panel, hud, background, cat, gauge, offsetX, aGElements, gameTouchState, aimX, aimY, targAimX, targAimY, flyX, flyY, vx, vy, gravity = 500,
    airResistance = 35,
    stageX, stageY, nextElementX, gapIncrease, gElementAttached, aParticles, starTotal = 0,
    curAirTime, longestAirTime, objectsHit, longestDist = 0,
    throwNum = 0,
    aPowerUpBarData = new Array(0, 0, 0, 0),
    aPowerUpButsData = new Array(25, 25, 50, 50, 100, 100, 200, 200, 200),
    musicTween;
loadPreAssets();