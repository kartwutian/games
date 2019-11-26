(function () {
    var b = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        a = "undefined" !== typeof module && module.exports,
        c = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function () {
            for (var a, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], e = 0, f = c.length, d = {}; e < f; e++)
                if ((a = c[e]) && a[1] in b) {
                    for (e = 0; e < a.length; e++) d[c[0][e]] =
                        a[e];
                    return d
                }
            return !1
        }(),
        f = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        d = {
            request: function (a) {
                var f = e.requestFullscreen;
                a = a || b.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) a[f]();
                else a[f](c && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                b[e.exitFullscreen]()
            },
            toggle: function (a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function (a) {
                this.on("change", a)
            },
            onerror: function (a) {
                this.on("error", a)
            },
            on: function (a, c) {
                var e = f[a];
                e && b.addEventListener(e, c, !1)
            },
            off: function (a,
                c) {
                var e = f[a];
                e && b.removeEventListener(e, c, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(d, {
        isFullscreen: {
            get: function () {
                return !!b[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function () {
                return b[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function () {
                return !!b[e.fullscreenEnabled]
            }
        }
    }), a ? module.exports = d : window.screenfull = d) : a ? module.exports = !1 : window.screenfull = !1
})();

function extractHostname(b) {
    b = -1 < b.indexOf("://") ? b.split("/")[2] : b.split("/")[0];
    b = b.split(":")[0];
    return b = b.split("?")[0]
}

function extractRootDomain(b) {
    b = extractHostname(b);
    var a = b.split("."),
        c = a.length;
    2 < c && (b = ("com" === a[c - 2] || "net" === a[c - 2] || "co" === a[c - 2]) && 3 < c ? a[c - 3] + "." + a[c - 2] + "." + a[c - 1] : a[c - 2] + "." + a[c - 1]);
    return b
}
var getClosestTop = function () {
        var b = window,
            a = !1;
        try {
            for (; b.parent.document !== b.document;)
                if (b.parent.document) b = b.parent;
                else {
                    a = !0;
                    break
                }
        } catch (c) {
            a = !0
        }
        return {
            topFrame: b,
            err: a
        }
    },
    getBestPageUrl = function (b) {
        var a = b.topFrame,
            c = "";
        if (b.err) try {
            try {
                c = window.top.location.href
            } catch (f) {
                var e = window.location.ancestorOrigins;
                c = e[e.length - 1]
            }
        } catch (f) {
            c = a.document.referrer
        } else c = a.location.href;
        return c
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function showMoreGames() {
    0 < jQuery("#more-games-button").length && jQuery("#more-games-button").fadeIn()
}

function hideMoreGames() {
    0 < jQuery("#more-games-button").length && jQuery("#more-games-button").fadeOut()
}

function checkMoreGames(b) {
    var a = getGames(extractRootDomain(PAGE_URL));
    0 !== a.length && (jQuery("body").append('<div id="more-games-button"></div>'), jQuery("#more-games-button").on("click", function () {
        var c = "<div class='more-games-dialog-wrapper'><div class='more-games-dialog-block'></div><div class='more-games-dialog-content'><div class='more-games-dialog-scrolling'>";
        for (var b = 0; b < a.length; b++) c += "<a target='_blank' class='more-games-dialog-tile' href='" + a[b].url + "'>", c += "<img src='" + a[b].img + "' />",
            c += "</a>";
        c += "</div><div class='more-games-dialog-logo'></div></div><div class='more-games-dialog-exit'></div></div>";
        jQuery("body").append(c);
        setTimeout(function () {
            jQuery(".more-games-dialog-block").addClass("more-games-dialog-block-show");
            setTimeout(function () {
                jQuery(".more-games-dialog-content").addClass("more-games-dialog-content-show");
                jQuery(".more-games-dialog-exit").addClass("more-games-dialog-exit-show")
            }, 100)
        }, 100)
    }), jQuery("#more-games-button").fadeIn())
}
$(document).ready(function () {
    jQuery(document).on("click", ".more-games-dialog-exit", function () {
        jQuery(".more-games-dialog-content").removeClass("more-games-dialog-content-show");
        jQuery(".more-games-dialog-exit").removeClass("more-games-dialog-exit-show");
        setTimeout(function () {
            jQuery(".more-games-dialog-block").removeClass("more-games-dialog-block-show");
            setTimeout(function () {
                jQuery(".more-games-dialog-wrapper").remove()
            }, 500)
        }, 100)
    })
});

function getGames(b) {
    var a = [];
    switch (b) {
        case "codethislab.com":
        case "gamedistribution.com":
            a.push({
                img: "http://img.gamedistribution.com/d96dc07738f248c49ae51c61facd4286.jpg",
                url: "http://gamedistribution.com/Games/1-Player/Classic-Backgammon.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/f360e5b43093401ca1b9a6d54105ffd2.jpg",
                url: "http://gamedistribution.com/Games/Golf/Minigolf-World.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/4ba63b68f15a4ecbb21eef429655dcc0.jpg",
                url: "http://gamedistribution.com/Games/Board/Domino-Block.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/9881ac54b4ac48ad8b6fd92232e5ed4f.jpg",
                url: "http://gamedistribution.com/Games/Jigsaw-Puzzle/Jigsaw-Deluxe.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/b2a3398e327b4f6da665759d6730aab4.jpg",
                url: "http://gamedistribution.com/Games/Chess/Master-Chess.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/a82bfcc90a8548a3976b0b2d13dd37dd.jpg",
                url: "http://gamedistribution.com/Games/Puzzle/Free-Words.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/d7b10d9e32844525a0bfa1fef7324895.jpg",
                url: "http://gamedistribution.com/Games/Board/Connect-4.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/36b470b1f113447696c2704c6e1bd0c2.jpg",
                url: "http://gamedistribution.com/Games/Skill/Snake-and-Blocks.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/e0d570df45e146899b986770297c0210.jpg",
                url: "http://gamedistribution.com/Games/Board/Master-Checkers.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/2cea016521ab452692a0141a40dfde9b.jpg",
                url: "http://gamedistribution.com/Games/Sports/Swimming-Pro.html"
            });
            a.push({
                img: "http://img.gamedistribution.com/3be284e237de4c7ba3a9e5cac0fd6ee3.jpg",
                url: "http://gamedistribution.com/Games/Soccer/Freekick-Training.html"
            });
            break;
        case "a10.com":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.a10.com/popular-games/snake-and-blocks"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.a10.com/action-games/swimming-pro"
            });
            break;
        case "10000paixnidia.gr":
            a.push({
                img: "http://media.bfgfile.com/images/32_49279d.jpg",
                url: "http://www.10000paixnidia.gr/paixnidia/minigolf-world"
            });
            break;
        case "10001games.fr":
            a.push({
                img: "http://media.bfgfile.com/images/32_49279d.jpg",
                url: "http://www.10001games.fr/jeu/minigolf-world"
            });
            break;
        case "101games.it":
            a.push({
                img: "http://media.bfgfile.com/images/32_49279d.jpg",
                url: "http://www.101games.it/giochi/minigolf-world"
            });
            break;
        case "agame.com":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.agame.com/game/snake-and-blocks/"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.agame.com/game/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.agame.com/game/connect-4-classic"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.agame.com/game/master-checkers"
            });
            break;
        case "bebekoyunu.com.tr":
            a.push({
                img: "http://m.bebekoyunu.com.tr/img/s/domino-4525.jpg",
                url: "http://bebekoyunu.com.tr/domino-oyna.html"
            });
            a.push({
                img: "http://m.bebekoyunu.com.tr/img/s/2-kisilik-satranc-4509.jpg",
                url: "http://www.bebekoyunu.com.tr/2-kisilik-satranc-oyna.html"
            });
            a.push({
                img: "http://m.bebekoyunu.com.tr/img/s/tavla-4519.jpg",
                url: "http://bebekoyunu.com.tr/2-kisilik-tavla-oyna.html"
            });
            a.push({
                img: "http://m.bebekoyunu.com.tr/img/s/matematik-yilani-2-4505.jpg",
                url: "http://www.bebekoyunu.com.tr/matematik-yilani-2-oyna.html"
            });
            break;
        case "bgames.com":
            a.push({
                img: "http://static.bgames.com/games/assets/icons/3/112243/89539/bggb-380662.jpg",
                url: "http://www.bgames.com/sport-games/minigolf_world/"
            });
            break;
        case "ojogos.com.br":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.flashgames.ru/igra/soberi-4-klassika"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.flashgames.ru/igra/zmeia-i-bloki"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.flashgames.ru/igra/chempion-po-plavaniiu"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.flashgames.ru/igra/master-shashek"
            });
            break;
        case "funnygames.be":
            a.push({
                img: "http://assets.funnygames.be/games/assets/promos/3/112243/89539/185x145-380649.jpg",
                url: "http://www.funnygames.be/spel/minigolf.html"
            });
            break;
        case "funnygames.nl":
            a.push({
                img: "http://assets.funnygames.nl/games/assets/promos/7/19057/72449/185x145-380370.jpg",
                url: "http://www.funnygames.nl/spel/vier_op_een_rij.html"
            });
            break;
        case "funnygames.us":
            a.push({
                img: "http://assets.funnygames.us/games/assets/screenshots/3/112243/89539/minigolf-world-pss-380643.jpg",
                url: "http://www.funnygames.us/game/minigolf_world.html"
            });
            a.push({
                img: "http://assets.funnygames.us/games/assets/screenshots/7/19057/72449/connect-4-pss-225028.jpg?r=1502092710859",
                url: "http://www.funnygames.us/game/connect_4.html"
            });
            break;
        case "game-game.com.ua":
            a.push({
                img: "http://www.game-game.com.ua/gamesimg/180384.jpg",
                url: "http://www.game-game.com.ua/180384/"
            });
            break;
        case "game-game.kz":
            a.push({
                img: "http://www.game-game.com.ua/gamesimg/180384.jpg",
                url: "http://game-game.kz/180384/"
            });
            break;
        case "game-game.lv":
            a.push({
                img: "http://www.game-game.com.ua/gamesimg/180384.jpg",
                url: "http://game-game.lv/180384/"
            });
            break;
        case "game-game.ma":
            a.push({
                img: "http://www.game-game.com.ua/gamesimg/180384.jpg",
                url: "http://game-game.ma/180384/"
            });
            break;
        case "games.co.id":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.games.co.id/permainan_/hubungkan-4-klasik"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.games.co.id/permainan_/ular-dan-balok"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.games.co.id/permainan_/renang-profesional"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.games.co.id/permainan_/master-checker"
            });
            break;
        case "games.co.uk":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.games.co.uk/game/connect-4-classic"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.games.co.uk/game/snake-and-blocks"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.games.co.uk/game/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.games.co.uk/game/master-checkers"
            });
            break;
        case "games.do":
            a.push({
                img: "http://media.bfgfile.com/images/32_49279d.jpg",
                url: "http://www.games.do/games/minigolf-world"
            });
            break;
        case "gamesgames.com":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.gamesgames.com/game/connect-4-classic"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.gamesgames.com/game/snake-and-blocks"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.gamesgames.com/game/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.gamesgames.com/game/master-checkers"
            });
            break;
        case "games.gr":
            a.push({
                img: "http://media.games.gr/images/32_49279d.jpg",
                url: "http://www.games.gr/search/minigolf/"
            });
            break;
        case "gioco.it":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.gioco.it/gioco/connect-4-classico"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.gioco.it/gioco/blocchi-e-serpenti"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.gioco.it/gioco/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.gioco.it/gioco/dama-royale"
            });
            break;
        case "giochi.it":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.giochi.it/gioco/connect-4-classico"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.giochi.it/gioco/blocchi-e-serpenti"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.giochi.it/gioco/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.giochi.it/gioco/dama-royale"
            });
            break;
        case "giochigratisonline.it":
            a.push({
                img: "http://www.giochigratisonline.it/giochi-online/giochi-vari/snake-and-blocks/snake.jpg",
                url: "http://www.giochigratisonline.it/giochi-online/giochi-vari/snake-and-blocks/"
            });
            break;
        case "girlsgogames.co.uk":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.girlsgogames.co.uk/game/connect-4-classic"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.girlsgogames.co.uk/game/snake-and-blocks"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.girlsgogames.co.uk/game/swimming-pro"
            });
            break;
        case "girlsgogames.fr":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.girlsgogames.fr/jeu/puissance-4-classique"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.girlsgogames.fr/jeu/serpent-vs-blocs-"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.girlsgogames.fr/jeu/pro-de-la-natation"
            });
            break;
        case "gry.pl":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.gry.pl/gra/weze-i-bloki"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.gry.pl/gra/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.gry.pl/gra/poacz-4-wersja-klasyczna"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.jeux.fr/jeu/maitre-aux-echecs"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.gry.pl/gra/mistrzowskie-warcaby"
            });
            break;
        case "juegos.com":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.juegos.com/juego/conecta-4-clasico"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.juegos.com/juego/serpientes-y-bloques"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.juegos.com/juego/nadador-profesional"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.juegos.com/juego/damas-maestras"
            });
            break;
        case "jeux.fr":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.jeux.fr/jeu/puissance-4-classique"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.jeux.fr/jeu/pro-de-la-natation"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.jeux.fr/jeu/maitre-aux-echecs"
            });
            break;
        case "k2t2.com":
            a.push({
                img: "http://k2t2.com/content/upload/games/images/minigolf-world.png",
                url: "http://k2t2.com/minigolf-world/"
            });
            a.push({
                img: "http://k2t2.com/content/upload/games/images/snake-and-blocks.png",
                url: "http://k2t2.com/snake-and-blocks/"
            });
            break;
        case "igry-multiki.ru":
            a.push({
                img: "http://www.igry-multiki.ru/contents/image/games/game/220x165/shashki-na-planshet-igry-b.jpg",
                url: "http://www.igry-multiki.ru/igra-shashki-na-planshet/"
            });
            break;
        case "ojogos.com.br":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.ojogos.com.br/jogo/connect-4-classico"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.ojogos.com.br/jogo/cobra-e-blocos"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.ojogos.com.br/jogo/swimming-pro"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.ojogos.com.br/jogo/maioral-das-damas"
            });
            break;
        case "oyungemisi.com":
            a.push({
                img: "http://static.oyungemisi.com/games/assets/icons/3/112243/89539/96x96-380646.jpg?r=1502194273127",
                url: "http://oyungemisi.com/minigolf-world-oyun/"
            });
            break;
        case "quicksave.su":
            a.push({
                img: "http://st.manamonster.com/images/games/1/11945-jigsaw-deluxe-300x169.jpg",
                url: "http://quicksave.su/games/11945-jigsaw-deluxe"
            });
            break;
        case "silvergames.com":
            a.push({
                img: "http://i1.silvergames.com/p/b/minigolf-world.png",
                url: "http://www.silvergames.com/en/minigolf-world"
            });
            a.push({
                img: "http://i2.silvergames.com/p/a/snake-and-blocks.png",
                url: "http://www.silvergames.com/en/snake-and-blocks"
            });
            break;
        case "spela.se":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.spela.se/spel_/lanka-ihop-4-klassisk"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.spela.se/spel_/orm-och-block"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.spela.se/spel_/simmarproffs"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.spela.se/spel_/damspelmastare"
            });
            break;
        case "spele.be":
            a.push({
                img: "http://static.spele.be/games/assets/screenshots/3/112243/89539/222x140-380645.jpg",
                url: "http://spele.be/minigolf-world-spel/"
            });
            a.push({
                img: "http://static.spele.be/games/assets/screenshots/9/68979/41390/222x140-85104.jpg",
                url: "http://spele.be/connect-4-spel/"
            });
            break;
        case "spele.nl":
            a.push({
                img: "http://spele.nl/minigolf-world-spel/",
                url: "http://spele.nl/connect-4-spel/"
            });
            a.push({
                img: "http://static.spele.nl/games/assets/icons/3/112243/89539/96x96-380646.jpg",
                url: "http://spele.nl/minigolf-world-spel/"
            });
            break;
        case "spelletjes.nl":
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-6-0/200X120_170460_1502450874.png",
                url: "http://www.spelletjes.nl/spel/slang-en-blokken"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-7-2/200X120_170472_1502697306.png",
                url: "http://www.spelletjes.nl/spel/klassieke-4-op-een-rij"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-7/200X120_165627.jpg",
                url: "http://www.spelletjes.nl/spel/zwemkampioen"
            });
            a.push({
                img: "http://files.cdn.spilcloud.com/thumbs-2-1/200X120_170521_1503068454.png",
                url: "http://www.spelletjes.nl/spel/dammeester"
            });
            break;
        case "spielen.es":
            a.push({
                img: "http://i2.spielen.es/p/a/minigolf-world.png",
                url: "http://www.spielen.es/de/minigolf-world"
            });
            a.push({
                img: "http://i2.spielen.es/p/a/snake-and-blocks.png",
                url: "http://www.spielen.es/de/snake-and-blocks"
            });
            break;
        case "yo-yoo.co.il":
            a.push({
                img: "http://www.yo-yoo.co.il/uploads/chesssonline.jpg",
                url: "http://games.yo-yoo.co.il/games_play.php?game=5139"
            }), a.push({
                img: "http://www.yo-yoo.co.il/uploads/4ineorafa.png",
                url: "http://games.yo-yoo.co.il/games_play.php?game=5140"
            }), a.push({
                img: "http://www.yo-yoo.co.il/uploads/sheshshsobae.jpg",
                url: "http://games.yo-yoo.co.il/games_play.php?game=5147"
            })
    }
    return a
}
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function (b) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(b.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler()
});

function trace(b) {
    console.log(b)
}

function isIOS() {
    var b = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); b.length;)
        if (navigator.platform === b.pop()) return !0;
    return s_bIsIphone = !1
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(b) {
    var a = b.toLowerCase(),
        c = window.document,
        e = c.documentElement;
    if (void 0 === window["inner" + b]) b = e["client" + b];
    else if (window["inner" + b] != e["client" + b]) {
        var f = c.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var d = c.createElement("div");
        d.id = "vpw-test-d";
        d.style.cssText = "position:absolute;top:-1000px";
        d.innerHTML = "<style>@media(" + a + ":" + e["client" + b] + "px){body#vpw-test-b div#vpw-test-d{" + a + ":7px!important}}</style>";
        f.appendChild(d);
        e.insertBefore(f, c.head);
        b = 7 == d["offset" + b] ? e["client" + b] : window["inner" + b];
        e.removeChild(f)
    } else b = window["inner" + b];
    return b
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var b = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < b ? b : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var b = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var a = getSize("Width");
        _checkOrientation(a, b);
        s_iScaleFactor = Math.min(b / CANVAS_HEIGHT, a / CANVAS_WIDTH);
        var c = CANVAS_WIDTH * s_iScaleFactor,
            e = CANVAS_HEIGHT * s_iScaleFactor;
        if (e < b) {
            var f = b - e;
            e += f;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else c < a && (f = a - c, c += f, e += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = b / 2 - e / 2;
        var d = a / 2 - c / 2,
            g = CANVAS_WIDTH / c;
        if (d * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) s_iScaleFactor =
            Math.min(b / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), a / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * s_iScaleFactor, e = CANVAS_HEIGHT * s_iScaleFactor, f = (b - e) / 2, d = (a - c) / 2, g = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * d * g;
        s_iOffsetY = -1 * f * g;
        0 <= f && (s_iOffsetY = 0);
        0 <= d && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos();
        null !== s_oSelectPlayer && s_oSelectPlayer.refreshButtonPos();
        $("#canvas").css("width", c + "px");
        $("#canvas").css("height",
            e + "px");
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", d + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(b, a) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (b > a ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (b) {
        return !0
    }
}

function randomFloatBetween(b, a, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(b + Math.random() * (a - b), a).toFixed(c))
}

function randomIntBetween(b, a, c) {
    "undefined" === typeof c && (c = 2);
    return parseInt(Math.min(b + Math.random() * (a - b), a).toFixed(c))
}

function createBitmap(b, a, c) {
    var e = new createjs.Bitmap(b),
        f = new createjs.Shape;
    a && c ? f.graphics.beginFill("#fff").drawRect(-a / 2, -c / 2, a, c) : f.graphics.beginFill("#ff0").drawRect(0, 0, b.width, b.height);
    e.hitArea = f;
    return e
}

function createSprite(b, a, c, e, f, d) {
    b = null !== a ? new createjs.Sprite(b, a) : new createjs.Sprite(b);
    a = new createjs.Shape;
    a.graphics.beginFill("#000000").drawRect(-c, -e, f, d);
    b.hitArea = a;
    return b
}

function randomFloatBetween(b, a, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(b + Math.random() * (a - b), a).toFixed(c))
}

function shuffle(b) {
    for (var a = b.length, c, e; 0 !== a;) e = Math.floor(Math.random() * a), --a, c = b[a], b[a] = b[e], b[e] = c;
    return b
}

function formatTime(b) {
    b /= 1E3;
    var a = Math.floor(b / 60);
    b = parseFloat(b - 60 * a).toFixed(1);
    var c = "";
    c = 10 > a ? c + ("0" + a + ":") : c + (a + ":");
    return 10 > b ? c + ("0" + b) : c + b
}

function degreesToRadians(b) {
    return b * Math.PI / 180
}

function checkRectCollision(b, a) {
    var c = getBounds(b, .9);
    var e = getBounds(a, .98);
    return calculateIntersection(c, e)
}

function calculateIntersection(b, a) {
    var c, e, f, d;
    var g = b.x + (c = b.width / 2);
    var m = b.y + (e = b.height / 2);
    var h = a.x + (f = a.width / 2);
    var k = a.y + (d = a.height / 2);
    g = Math.abs(g - h) - (c + f);
    m = Math.abs(m - k) - (e + d);
    return 0 > g && 0 > m ? (g = Math.min(Math.min(b.width, a.width), -g), m = Math.min(Math.min(b.height, a.height), -m), {
        x: Math.max(b.x, a.x),
        y: Math.max(b.y, a.y),
        width: g,
        height: m,
        rect1: b,
        rect2: a
    }) : null
}

function getBounds(b, a) {
    var c = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (b instanceof createjs.Container) {
        c.x2 = -Infinity;
        c.y2 = -Infinity;
        var e = b.children,
            f = e.length,
            d;
        for (d = 0; d < f; d++) {
            var g = getBounds(e[d], 1);
            g.x < c.x && (c.x = g.x);
            g.y < c.y && (c.y = g.y);
            g.x + g.width > c.x2 && (c.x2 = g.x + g.width);
            g.y + g.height > c.y2 && (c.y2 = g.y + g.height)
        }
        Infinity == c.x && (c.x = 0);
        Infinity == c.y && (c.y = 0);
        Infinity == c.x2 && (c.x2 = 0);
        Infinity == c.y2 && (c.y2 = 0);
        c.width = c.x2 - c.x;
        c.height = c.y2 - c.y;
        delete c.x2;
        delete c.y2
    } else {
        if (b instanceof createjs.Bitmap) {
            f =
                b.sourceRect || b.image;
            d = f.width * a;
            var m = f.height * a
        } else if (b instanceof createjs.Sprite)
            if (b.spriteSheet._frames && b.spriteSheet._frames[b.currentFrame] && b.spriteSheet._frames[b.currentFrame].image) {
                f = b.spriteSheet.getFrame(b.currentFrame);
                d = f.rect.width;
                m = f.rect.height;
                e = f.regX;
                var h = f.regY
            } else c.x = b.x || 0, c.y = b.y || 0;
        else c.x = b.x || 0, c.y = b.y || 0;
        e = e || 0;
        d = d || 0;
        h = h || 0;
        m = m || 0;
        c.regX = e;
        c.regY = h;
        f = b.localToGlobal(0 - e, 0 - h);
        g = b.localToGlobal(d - e, m - h);
        d = b.localToGlobal(d - e, 0 - h);
        e = b.localToGlobal(0 - e, m - h);
        c.x =
            Math.min(Math.min(Math.min(f.x, g.x), d.x), e.x);
        c.y = Math.min(Math.min(Math.min(f.y, g.y), d.y), e.y);
        c.width = Math.max(Math.max(Math.max(f.x, g.x), d.x), e.x) - c.x;
        c.height = Math.max(Math.max(Math.max(f.y, g.y), d.y), e.y) - c.y
    }
    return c
}

function NoClickDelay(b) {
    this.element = b;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function (b) {
        switch (b.type) {
            case "touchstart":
                this.onTouchStart(b);
                break;
            case "touchmove":
                this.onTouchMove(b);
                break;
            case "touchend":
                this.onTouchEnd(b)
        }
    },
    onTouchStart: function (b) {
        b.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (b) {
        this.moved = !0
    },
    onTouchEnd: function (b) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            b = document.elementFromPoint(b.changedTouches[0].clientX, b.changedTouches[0].clientY);
            3 == b.nodeType && (b = b.parentNode);
            var a = document.createEvent("MouseEvents");
            a.initEvent("click", !0, !0);
            b.dispatchEvent(a)
        }
    }
};
(function () {
    function b(c) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        c = c || window.event;
        c.type in b ? document.body.className = b[c.type] : (document.body.className = this[a] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var a = "hidden";
    a in document ? document.addEventListener("visibilitychange", b) : (a = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b) : (a = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", b) : (a = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? document.onfocusin = document.onfocusout = b : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = b
})();

function playSound(b, a, c) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds[b].play(), s_aSounds[b].volume(a), s_aSounds[b].loop(c);
    return null
}

function stopSound(b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].stop()
}

function setVolume(b, a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].volume(a)
}

function setMute(b, a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].mute(a)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(b) {
    for (var a = window.location.search.substring(1).split("&"), c = 0; c < a.length; c++) {
        var e = a[c].split("=");
        if (e[0] == b) return e[1]
    }
}

function distanceV2(b, a) {
    var c = b.x - a.x,
        e = b.y - a.y;
    return Math.sqrt(c * c + e * e)
}

function randomRange(b, a) {
    return Math.floor(Math.random() * (a - b)) + b
}

function saveItem(b, a) {
    s_bStorageAvailable && localStorage.setItem(b, a)
}

function getItem(b) {
    return s_bStorageAvailable ? localStorage.getItem(b) : null
}

function clearAllItem() {
    localStorage.clear()
}

function getRandomColor() {
    return "rgba(" + (Math.floor(127 * Math.random() + 255) - 127) + "," + (Math.floor(127 * Math.random() + 255) - 127) + "," + (Math.floor(127 * Math.random() + 255) - 127) + ",1)"
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !inIframe() && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut(), null !== s_oSelectPlayer && s_oSelectPlayer.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut();
    null !== s_oSelectPlayer && s_oSelectPlayer.resetFullscreenBut()
});
var bInitialized = !1;
 

function CSpriteLibrary() {
    var b, a, c, e, f, d;
    this.init = function (g, m, h) {
        c = a = 0;
        e = g;
        f = m;
        d = h;
        b = {}
    };
    this.addSprite = function (c, e) {
        b.hasOwnProperty(c) || (b[c] = {
            szPath: e,
            oSprite: new Image
        }, a++)
    };
    this.getSprite = function (a) {
        return b.hasOwnProperty(a) ? b[a].oSprite : null
    };
    this._onSpritesLoaded = function () {
        f.call(d)
    };
    this._onSpriteLoaded = function () {
        e.call(d);
        ++c == a && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var a in b) b[a].oSprite.oSpriteLibrary = this, b[a].oSprite.onload = function () {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            b[a].oSprite.src = b[a].szPath
    };
    this.getNumSprites = function () {
        return a
    }
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 840,
    EDGEBOARD_X = 120,
    EDGEBOARD_Y = 122,
    PRIMARY_FONT = "walibi",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    s_oPhysicsController, s_oPhysicsObjects, TIME_STEP_BOX2D = 1 / 60,
    ITINERATION_BOX2D = 7,
    POSITION_ITINERATION_BOX2D = 3,
    DRAW_BOX2D_CONTEXT = !1,
    NUM_PLAYERS = 8,
    OBSTACLES_INFO, TEAMMATES_INFO, STARS_INFO, VERTICAL_DUCK = 1,
    CUBE = 2,
    TRAINING_CONE = 3,
    DYNAMIC_CUBE = 4,
    WEDGE = 5,
    CONE = 6,
    HORIZONTAL_DUCK = 7,
    BALL_RADIUS, BALL_DENSITY = 1,
    BALL_FRICTION = .4,
    BALL_RESTITUTION = .4,
    BALL_LINEAR_DAMPING = .5,
    BALL_CATEGORY_COLLISION = 1,
    FIELD_CATEGORY_COLLISION = 2,
    ON_CONTROLLER_ROLL = 0,
    ON_CONTROLLER_END = 1,
    ON_CONTROLLER_REMOVE = 3,
    WORLD_SCALE = 30,
    MS_ANIM_BALL_FADE = 500,
    TIME_FOR_LAUNCH = 400,
    HIT_BALL_MIN_FORCE = 3,
    VERTEX_SCALE = {
        x: 53,
        y: 53
    },
    HIT_BALL_MAX_FORCE = 50,
    FORCE_MULTIPLIER = .008,
    OFFSET_ANGLE_ARROW = 0,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    MIN_VELOCITY_FOR_LAUNCH = .16;
TIME_FOR_LAUNCH = 400;
var BALL_OUT_OF_RANGE = {
        xMax: CANVAS_WIDTH - 140,
        xMin: 0
    },
    BALL = 0,
    STAR = 1,
    GOAL = 2,
    TEAMMATE = 3,
    CUBE_WOOD = 4,
    CUBE_METAL = 5,
    DUCK = 6,
    GOAL_POST = 7,
    BALL_START_Y = 582.5,
    NUM_ROWS_PAGE_LEVEL = 3,
    NUM_COLS_PAGE_LEVEL = 5,
    s_b2Players, STAR_SCORE, NUM_LEVELS;
STATE_LOADING = 0;
STATE_HELP = STATE_MENU = 1;
STATE_GAME = 3;
var STATE_LEVEL_SELECTION = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    LS_SCORES = "freekick_training_scores",
    LS_STARS = "freekick_training_stars",
    LS_LAST_LEVEL = "freekick_training_level",
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;

function CPhysicsController() {
    var b = Box2D.Common.Math.b2Vec2,
        a = Box2D.Dynamics.b2World,
        c = Box2D.Dynamics.b2DebugDraw,
        e, f, d = this,
        g = document.getElementById("canvas").getContext("2d");
    this.init = function () {
        e = new b(0, 9.81);
        f = new a(e, !0);
        f.Step(TIME_STEP_BOX2D, ITINERATION_BOX2D, POSITION_ITINERATION_BOX2D);
        if (DRAW_BOX2D_CONTEXT) {
            var d = new c;
            d.SetSprite(g);
            d.SetDrawScale(WORLD_SCALE);
            d.SetFillAlpha(.5);
            d.SetLineThickness(1);
            d.SetFlags(c.e_shapeBit | c.e_jointBit);
            f.SetDebugDraw(d);
            window.setInterval(this.updateDrawDebug,
                1E3 / 120)
        }
    };
    this.startComputing = function (a) {
        a.GetBody().SetActive(!0)
    };
    this.applyImpulse = function (a, c) {
        a.GetBody().ApplyImpulse(c, a.GetBody().GetWorldCenter())
    };
    this.applyForce = function (a, c) {
        a.GetBody().ApplyForce(c, a.GetBody().GetWorldCenter())
    };
    this.decreaseSpeedRotation = function (a) {
        var c = .99 * a.GetBody().GetAngularVelocity();
        a.GetBody().SetAngularVelocity(c)
    };
    this.destroyAllBody = function () {
        for (var a = f.GetBodyList(); a.GetNext();) {
            var c = a.GetNext();
            f.DestroyBody(c)
        }
    };
    this.destroyAllJoint = function () {
        for (var a =
                f.GetJointList(); a.GetNext();) {
            var c = a.GetNext();
            f.DestroyJoint(c)
        }
    };
    this.destroyWorld = function () {
        f = null
    };
    this.getSpeedRotation = function (a) {
        return a.GetBody().GetAngularVelocity()
    };
    this.moveObject = function (a, c, b) {
        c = {
            x: c / WORLD_SCALE,
            y: b / WORLD_SCALE
        };
        a.GetBody().SetPosition(c)
    };
    this.destroyBody = function (a) {
        f.DestroyBody(a.GetBody())
    };
    this.destroyJoint = function (a) {
        f.DestroyJoint(a)
    };
    this.getJointAngle = function (a) {
        return a.GetJointAngle() * (180 / Math.PI)
    };
    this.getInstance = function () {
        null === d && (d = new CPhysicsController);
        return d
    };
    this.getJointTranslation = function (a) {
        return a.GetJointTranslation()
    };
    this.update = function () {
        f.Step(.05, 3, 3);
        f.ClearForces()
    };
    this.updateDrawDebug = function () {
        f.DrawDebugData()
    };
    this.getWorld = function () {
        return f
    };
    this.setElementLinearDamping = function (a, c) {
        a.GetBody().SetLinearDamping(c)
    };
    this.setElementAngularVelocity = function (a, c) {
        a.GetBody().SetAngularVelocity(c)
    };
    this.setElementPosition = function (a, c) {
        var b = {
            x: c.x / WORLD_SCALE,
            y: c.y / WORLD_SCALE
        };
        a.GetBody().SetPosition(b)
    };
    this.getElementPosition =
        function (a) {
            var c = a.GetBody().GetPosition();
            return {
                x: c.x * WORLD_SCALE,
                y: c.y * WORLD_SCALE,
                angle: 180 * a.GetBody().GetAngle() / Math.PI
            }
        };
    this.setElementAngle = function (a, c) {
        a.GetBody().SetAngle(c * Math.PI / 180)
    };
    this.getElementAngle = function (a) {
        return 180 * a.GetBody().GetAngle() / Math.PI
    };
    this.getElementVelocity = function (a) {
        return a.GetBody().GetLinearVelocity()
    };
    this.setElementLinearVelocity = function (a, c) {
        a.GetBody().SetLinearVelocity(c)
    };
    this.init()
}

function CPhysicsObject() {
    var b = Box2D.Common.Math.b2Vec2,
        a = Box2D.Dynamics.b2BodyDef,
        c = Box2D.Dynamics.b2Body,
        e = Box2D.Dynamics.b2FixtureDef,
        f = Box2D.Collision.Shapes.b2PolygonShape,
        d = Box2D.Collision.Shapes.b2CircleShape,
        g = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        m, h;
    this.init = function () {
        h = s_oPhysicsController.getInstance();
        m = h.getWorld();
        s_oPhysicsObjects = this
    };
    this.addWall = function (b, d, l, h, g, n, t, x) {
        var k = new e;
        k.density = n;
        k.friction = t;
        k.restitution = x;
        n = new a;
        n.type = c.b2_staticBody;
        k.shape = new f;
        k.shape.SetAsBox(b /
            WORLD_SCALE, d / WORLD_SCALE);
        n.position.Set(l / WORLD_SCALE, h / WORLD_SCALE);
        n.angle = g * Math.PI / 180;
        m.CreateBody(n).CreateFixture(k)
    };
    this.addLine = function (d, h, l, g, q, n, t, x) {
        var k = new e;
        k.density = n;
        k.friction = t;
        k.restitution = x;
        k.filter.categoryBits = FIELD_CATEGORY_COLLISION;
        k.filter.maskBits = -1;
        k.filter.groupIndex = 1;
        n = new a;
        n.type = c.b2_staticBody;
        n.position.Set(d / WORLD_SCALE, h / WORLD_SCALE);
        n.angle = q * Math.PI / 180;
        n.userData = {
            type: WALL
        };
        k.shape = new f;
        d = [];
        h = new b;
        h.Set(l.x / WORLD_SCALE, l.y / WORLD_SCALE);
        d.push(h);
        l = new b;
        l.Set(g.x / WORLD_SCALE, g.y / WORLD_SCALE);
        d.push(l);
        k.shape.SetAsBox(200, .3);
        k.shape.SetAsArray(d, d.length);
        return m.CreateBody(n).CreateFixture(k)
    };
    this.addPolygon = function (d, h, l, g) {
        var k = new e;
        k.density = h.density;
        k.friction = h.friction;
        k.restitution = h.restitution;
        k.isSensor = l;
        l = new a;
        l.type = c.b2_staticBody;
        l.position.Set(h.position.x / WORLD_SCALE, h.position.y / WORLD_SCALE);
        l.angle = h.angle * Math.PI / 180;
        l.userData = g;
        l.allowSleep = !1;
        k.shape = new f;
        d = d.vertices;
        h = [];
        for (g = d.length - 1; - 1 < g; g--) {
            var p =
                new b;
            p.Set(d[g].x * VERTEX_SCALE.x / WORLD_SCALE, d[g].y * VERTEX_SCALE.y / WORLD_SCALE);
            h.push(p)
        }
        k.shape.SetAsArray(h, h.length);
        return m.CreateBody(l).CreateFixture(k)
    };
    this.addCollisionPolygon = function (d) {
        var k = new e;
        k.density = d.density;
        k.friction = d.friction;
        k.restitution = d.restitution;
        d.info.type === PLAYER ? (k.filter.categoryBits = FIELD_CATEGORY_COLLISION, k.filter.maskBits = BALL_CATEGORY_COLLISION, k.filter.groupIndex = 1) : d.info.type === OPPONENT && (k.filter.categoryBits = OPPONENT_CATEGORY_COLLISION, k.filter.maskBits =
            BALL_CATEGORY_COLLISION, k.filter.groupIndex = 1);
        var l = new a;
        l.type = c.b2_kinematicBody;
        l.position.Set(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
        l.angle = d.angle * Math.PI / 180;
        l.userData = d.info;
        k.shape = new f;
        for (var h = d.vertex, g = [], n = 0; n < h.length; n++) {
            for (var t = [], x = 0; x < h[n].length; x++) {
                var v = new b;
                d.info.type === OPPONENT ? v.Set(h[n][x].x / WORLD_SCALE, (h[n][x].y + 11) / WORLD_SCALE) : v.Set(h[n][x].x / WORLD_SCALE, h[n][x].y / WORLD_SCALE);
                t.push(v)
            }
            k.shape.SetAsArray(t, t.length);
            g[n] = m.CreateBody(l).CreateFixture(k)
        }
        return g
    };
    this.addCollisionShape = function (b) {
        var k = new e;
        k.density = b.density;
        k.friction = b.friction;
        k.restitution = b.restitution;
        k.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        k.filter.maskBits = BALL_CATEGORY_COLLISION;
        k.filter.groupIndex = 1;
        var h = new a;
        h.type = c.b2_dynamicBody;
        k.shape = new f;
        k.shape.SetAsBox(b.recWidth / WORLD_SCALE, b.recHeight / WORLD_SCALE);
        h.position.Set((b.x + b.rec_offset.x) / WORLD_SCALE, (b.y + b.rec_offset.y) / WORLD_SCALE);
        h.fixedRotation = !0;
        var p = m.CreateBody(h),
            q = p.CreateFixture(k);
        h = new a;
        var n =
            new e;
        n.density = b.density;
        n.friction = b.friction;
        n.restitution = b.restitution;
        n.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        n.filter.maskBits = -1;
        n.filter.groupIndex = 1;
        h.type = c.b2_dynamicBody;
        n.shape = new d(b.radius / WORLD_SCALE);
        h.position.x = (b.x + b.sph_offset.x) / WORLD_SCALE;
        h.position.y = (b.y + b.sph_offset.y) / WORLD_SCALE;
        h.fixedRotation = !0;
        h.allowSleep = !1;
        h.bullet = !0;
        var t = m.CreateBody(h);
        n = t.CreateFixture(n);
        h = new a;
        h.type = c.b2_dynamicBody;
        k.shape = new f;
        k.shape.SetAsBox(b.rec_neck.width / WORLD_SCALE,
            b.rec_neck.height / WORLD_SCALE);
        h.position.Set((b.x + b.rec_neck.x) / WORLD_SCALE, (b.y + b.rec_neck.y) / WORLD_SCALE);
        h.angle = Math.PI / 180 * b.rec_neck.angle;
        h.fixedRotation = !0;
        b = m.CreateBody(h);
        k = b.CreateFixture(k);
        h = new g;
        h.Initialize(p, t, t.GetWorldCenter());
        t = m.CreateJoint(h);
        h = new g;
        h.Initialize(p, b, b.GetWorldCenter());
        p = m.CreateJoint(h);
        return {
            fixture1: q,
            fixture2: n,
            fixture3: k,
            jointA: t,
            jointB: p
        }
    };
    this.createAContactListener = function () {
        var a = new Box2D.Dynamics.b2ContactListener;
        a.BeginContact = function (a) {
            var b =
                a.GetFixtureA().GetBody().GetUserData();
            a = a.GetFixtureB().GetBody().GetUserData();
            if (null !== b && null !== a) {
                a.type === STAR && b.type === BALL && s_oGame.starCollision(a.index);
                b.type === STAR && a.type === BALL && s_oGame.starCollision(b.index);
                if (b.type === GOAL && a.type === BALL) s_oGame.onGoal();
                if (b.type === GOAL_POST && a.type === BALL) s_oGame.onHitPost();
                if (b.type === CUBE_WOOD && a.type === BALL) s_oGame.onHitWoodCase();
                if (b.type === CUBE_METAL && a.type === BALL) s_oGame.onHitMetalCase();
                b.type === TEAMMATE && a.type === BALL && s_oGame.teamMateCollision(b.index);
                a.type === DUCK && s_oGame.duckCollision(a.index);
                b.type === DUCK && s_oGame.duckCollision(b.index);
                b.type !== BALL && a.type !== BALL || void 0 !== b.isSensor || void 0 !== a.isSensor || playSound("kick", 1, !1)
            }
        };
        m.SetContactListener(a)
    };
    this.addBall = function (b, f, h, g, q, n) {
        var k = new e;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        k.filter.categoryBits = BALL_CATEGORY_COLLISION;
        k.filter.maskBits = -1;
        k.filter.groupIndex = 1;
        g = new a;
        g.type = c.b2_dynamicBody;
        k.shape = new d(b / WORLD_SCALE);
        g.allowSleep = !1;
        g.userData = {
            type: BALL
        };
        g.position.x =
            f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        g.linearDamping = BALL_LINEAR_DAMPING;
        g.bullet = !0;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addCircle = function (b, f, h, g, q, n, t, x) {
        var k = new e;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        k.isSensor = t;
        g = new a;
        g.type = c.b2_staticBody;
        g.userData = x;
        k.shape = new d(b / WORLD_SCALE);
        g.position.x = f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addStaticCircle = function (b, f, h, g, q, n) {
        var k = new e;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        g = new a;
        g.type = c.b2_staticBody;
        k.shape = new d(b / WORLD_SCALE);
        g.position.x = f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addRectangle = function (b, d) {
        var h = new e;
        h.density = b.density;
        h.friction = b.friction;
        h.restitution = b.restitution;
        h.isSensor = b.sensor;
        h.filter.categoryBits = 3;
        h.filter.maskBits = 1;
        h.filter.groupIndex = 1;
        var k = new a;
        k.type = c.b2_staticBody;
        d && (k.type = c.b2_dynamicBody);
        void 0 !== b.info && (k.userData = b.info);
        h.shape = new f;
        h.shape.SetAsBox(b.width / WORLD_SCALE,
            b.height / WORLD_SCALE);
        k.position.Set(b.x / WORLD_SCALE, b.y / WORLD_SCALE);
        k.angle = b.angle * Math.PI / 180;
        return m.CreateBody(k).CreateFixture(h)
    };
    this.addTriangle = function (d, h, g, p, q, n, t, x, v, z) {
        var k = [],
            l = new e;
        l.density = p;
        l.friction = q;
        l.restitution = n;
        l.isSensor = v;
        p = new a;
        p.type = c.b2_staticBody;
        z && (p.type = c.b2_dynamicBody);
        p.userData = x;
        l.shape = new f;
        for (x = 0; 3 > x; x++) k.push(new b(g[x].i1, g[x].i2));
        l.shape.SetAsVector(k, 3);
        p.position.Set(d / WORLD_SCALE, h / WORLD_SCALE);
        p.angle = t * Math.PI / 180;
        return m.CreateBody(p).CreateFixture(l)
    };
    this.setRotation = function (a) {
        this.rotation = a
    };
    this._update = function (a) {};
    this.init()
}
var s_fBallMagnitude;

function CObstacles(b, a, c, e, f) {
    var d, g, m, h, k, u, l, p, q, n;
    this.init = function (a, b, c, e, f) {
        d = a;
        g = b;
        m = c;
        u = e;
        k = new createjs.Container;
        u.addChild(k);
        p = this;
        q = !1;
        f.push(this);
        n = f.length - 1;
        switch (d) {
            case VERTICAL_DUCK:
                a = s_oSpriteLibrary.getSprite("duck");
                b = {
                    images: [a],
                    frames: {
                        width: 120,
                        height: 122,
                        regX: 60,
                        regY: 61
                    },
                    animations: {
                        idle: [0, 5, "idle"],
                        hit: [6, 13, "idle"]
                    }
                };
                b = new createjs.SpriteSheet(b);
                l = createSprite(b, "idle", 60, 61, 120, 122);
                l.x = CANVAS_WIDTH / 2;
                l.y = CANVAS_HEIGHT / 2;
                k.addChild(l);
                h = s_oPhysicsObjects.addCircle(2 *
                    BALL_RADIUS, g, m, 99, BALL_FRICTION, 1.2, !1, {
                        type: DUCK,
                        index: n
                    });
                break;
            case CUBE:
                a = s_oSpriteLibrary.getSprite("cube");
                l = createBitmap(a);
                l.regX = a.width / 2;
                l.regY = a.height / 2;
                l.x = g;
                l.y = m;
                k.addChild(l);
                h = s_oPhysicsObjects.addRectangle({
                    x: g,
                    y: m,
                    width: 35,
                    height: 35,
                    density: 2.5,
                    friction: .5,
                    restitution: .1,
                    angle: 0,
                    sensor: !1,
                    info: {
                        type: CUBE_METAL,
                        iIndex: f.length - 1
                    }
                });
                break;
            case TRAINING_CONE:
                a = s_oSpriteLibrary.getSprite("training_cone");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                k.addChild(l);
                f = [{
                        x: .8194444179534912,
                        y: .277777761220932
                    },
                    {
                        x: .7916666865348816,
                        y: .2083333283662796
                    }, {
                        x: .6527777910232544,
                        y: .0972222089767456
                    }, {
                        x: .4444444477558136,
                        y: .01388886570930481
                    }, {
                        x: .3194444477558136,
                        y: .027777761220932007
                    }, {
                        x: .1388888955116272,
                        y: .1111111044883728
                    }, {
                        x: .013888888992369175,
                        y: .2361111044883728
                    }
                ];
                h = s_oPhysicsObjects.addPolygon({
                    vertices: f
                }, {
                    position: {
                        x: b + 8,
                        y: c + 6
                    },
                    angle: 0,
                    density: 0,
                    friction: 1,
                    restutution: 1
                }, !1, null);
                break;
            case DYNAMIC_CUBE:
                a = s_oSpriteLibrary.getSprite("cube_2");
                l = createBitmap(a);
                l.regX = a.width / 2;
                l.regY = a.height / 2;
                l.x = g;
                l.y = m;
                k.addChild(l);
                h = s_oPhysicsObjects.addRectangle({
                    x: g,
                    y: m,
                    width: 35,
                    height: 35,
                    density: 5,
                    friction: .5,
                    restitution: 0,
                    angle: 0,
                    sensor: !1,
                    info: {
                        type: CUBE_WOOD,
                        iIndex: f.length - 1
                    }
                }, !0);
                s_oPhysicsController.setElementLinearDamping(h, .7);
                break;
            case WEDGE:
                a = s_oSpriteLibrary.getSprite("wedge");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                k.addChild(l);
                b = [];
                b[0] = {
                    i1: 40 / WORLD_SCALE,
                    i2: -20 / WORLD_SCALE
                };
                b[1] = {
                    i1: -50 / WORLD_SCALE,
                    i2: -18 / WORLD_SCALE
                };
                b[2] = {
                    i1: 40 / WORLD_SCALE,
                    i2: -50 / WORLD_SCALE
                };
                h = s_oPhysicsObjects.addTriangle(g +
                    46, m + 60, b, 2.5, .5, 0, 0, null, !1, !1);
                break;
            case CONE:
                a = s_oSpriteLibrary.getSprite("cone");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                l.regX = a.width / 2;
                l.regY = a.height;
                k.addChild(l);
                b = [];
                b[0] = {
                    i1: 30 / WORLD_SCALE,
                    i2: -15 / WORLD_SCALE
                };
                b[1] = {
                    i1: -30 / WORLD_SCALE,
                    i2: -15 / WORLD_SCALE
                };
                b[2] = {
                    i1: 0 / WORLD_SCALE,
                    i2: -100 / WORLD_SCALE
                };
                h = s_oPhysicsObjects.addTriangle(g - 1, m + 15, b, 4, 0, .3, 0, null, !1, !0);
                s_oPhysicsController.setElementLinearDamping(h, .7);
                break;
            case HORIZONTAL_DUCK:
                a = s_oSpriteLibrary.getSprite("duck"), b = {
                    images: [a],
                    frames: {
                        width: 120,
                        height: 122,
                        regX: 60,
                        regY: 61
                    },
                    animations: {
                        idle: [0, 5, "idle", .5],
                        hit: [6, 13, "idle", .5]
                    }
                }, b = new createjs.SpriteSheet(b), l = createSprite(b, "idle", 60, 61, 120, 122), l.x = CANVAS_WIDTH / 2, l.y = CANVAS_HEIGHT / 2, k.addChild(l), h = s_oPhysicsObjects.addCircle(2 * BALL_RADIUS, g, m, 99, BALL_FRICTION, 1.2, !1, {
                    type: DUCK,
                    index: n
                })
        }
    };
    this.init(b, a, c, e, f);
    this.update = function () {
        var a = s_oPhysicsController.getElementPosition(h);
        switch (d) {
            case VERTICAL_DUCK:
                !q && a.y <= m + 250 ? s_oPhysicsController.setElementPosition(h, {
                    x: a.x,
                    y: a.y + 7
                }) : q = !0;
                q && a.y >= m ? s_oPhysicsController.setElementPosition(h, {
                    x: a.x,
                    y: a.y - 7
                }) : q = !1;
                a = s_oPhysicsController.getElementPosition(h);
                l.x = a.x - BALL_RADIUS + 17;
                l.y = a.y - BALL_RADIUS + 8;
                break;
            case DYNAMIC_CUBE:
                l.x = a.x;
                l.y = a.y;
                l.rotation = a.angle;
                break;
            case CONE:
                l.x = a.x;
                l.y = a.y - 12;
                l.rotation = a.angle;
                break;
            case HORIZONTAL_DUCK:
                !q && a.x <= g + 350 ? (l.scaleX = -1, s_oPhysicsController.setElementPosition(h, {
                        x: a.x + 7,
                        y: a.y
                    })) : q = !0, q && a.x >= g ? (l.scaleX = 1, s_oPhysicsController.setElementPosition(h, {
                        x: a.x - 7,
                        y: a.y
                    })) : q = !1, a = s_oPhysicsController.getElementPosition(h),
                    l.x = a.x - BALL_RADIUS + 17, l.y = a.y - BALL_RADIUS + 8
        }
    };
    this.getPhysics = function () {
        return h
    };
    this.destroyObstacle = function () {
        s_oPhysicsController.destroyBody(h);
        (new createjs.Tween.get(l)).to({
            alpha: 0
        }, 700).call(p.unload)
    };
    this.onDuckCollision = function () {
        d !== VERTICAL_DUCK && d !== HORIZONTAL_DUCK || l.gotoAndPlay("hit")
    };
    this.getY = function () {
        return l.y
    };
    this.unload = function () {
        u.removeChild(k); - 1 < f.indexOf(p) && f.splice(f.indexOf(p), 1)
    }
}

function CTeamMate(b, a, c, e) {
    var f, d, g, m, h;
    this.init = function (a, c, e) {
        f = a;
        d = c;
        m = e;
        g = new createjs.Container;
        m.addChild(g);
        a = {
            images: [s_oSpriteLibrary.getSprite("player_" + s_iIndexPlayer)],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle", .8],
                shot: [12, 16, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        h = createSprite(a, "idle", 52.5, 68, 105, 136);
        g.addChild(h);
        a = s_oPhysicsObjects.addRectangle({
            x: f,
            y: d,
            width: 20,
            height: 35,
            density: 0,
            friction: 0,
            restitution: 0,
            sensor: !0,
            info: {
                type: TEAMMATE,
                index: b,
                isSensor: !0
            },
            angle: 0
        });
        a = s_oPhysicsController.getElementPosition(a);
        h.x = a.x;
        h.y = a.y - 27
    };
    this.onShot = function () {
        h.gotoAndPlay("shot")
    };
    this.init(a, c, e)
}

function CSelectPlayer() {
    var b, a, c, e, f, d, g, m, h, k, u, l, p, q, n, t, x, v, z, y, A;
    this.init = function () {
        n = 0;
        k = new createjs.Container;
        s_oStage.addChild(k);
        var r = s_oSpriteLibrary.getSprite("bg_menu");
        r = createBitmap(r, r.width, r.height);
        k.addChild(r);
        r = new createjs.Shape;
        r.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.alpha = .7;
        k.addChild(r);
        r = s_oSpriteLibrary.getSprite("msg_box");
        var w = createBitmap(r, r.width, r.height);
        w.regX = r.width / 2;
        w.regY = r.height / 2;
        w.scaleX = 1.1;
        w.scaleY = w.scaleX;
        w.x =
            CANVAS_WIDTH / 2;
        w.y = CANVAS_HEIGHT / 2;
        k.addChild(w);
        w = createBitmap(r, r.width, r.height);
        w.regX = r.width / 2;
        w.regY = r.height / 2;
        w.scaleX = .25;
        w.scaleY = .42;
        w.x = CANVAS_WIDTH / 2 + 215;
        w.y = CANVAS_HEIGHT / 2;
        k.addChild(w);
        u = new createjs.Text(TEXT_TITLE_SELECT_PLAYERS, " 40px " + PRIMARY_FONT, "#FFFFFF");
        u.textBaseline = "middle";
        u.textAlign = "center";
        u.x = CANVAS_WIDTH / 2;
        u.y = CANVAS_HEIGHT / 2 - 230;
        k.addChild(u);
        g = [];
        m = [];
        h = [];
        p = [];
        for (r = 0; r < NUM_PLAYERS; r++) g.push(s_oSpriteLibrary.getSprite("player_" + r)), m.push(s_oSpriteLibrary.getSprite("flag_" +
            r)), 4 > r ? p.push(new CGfxButton(CANVAS_WIDTH / 2 - 240, CANVAS_HEIGHT / 2 - 140 + 100 * r, m[r], k)) : p.push(new CGfxButton(CANVAS_WIDTH / 2 - 240 + 200, CANVAS_HEIGHT / 2 - 140 + 100 * (r - 4), m[r], k)), p[r].addEventListenerWithParams(ON_MOUSE_DOWN, this.onSelectedFlag, this, r);
        h.push(TEXT_SELECT_PLAYER_0);
        h.push(TEXT_SELECT_PLAYER_1);
        h.push(TEXT_SELECT_PLAYER_2);
        h.push(TEXT_SELECT_PLAYER_3);
        h.push(TEXT_SELECT_PLAYER_4);
        h.push(TEXT_SELECT_PLAYER_5);
        h.push(TEXT_SELECT_PLAYER_6);
        h.push(TEXT_SELECT_PLAYER_7);
        q = this.getSpritePlayer(g[0]);
        q.x = CANVAS_WIDTH / 2 + 215;
        q.y = CANVAS_HEIGHT / 2;
        q.scaleX = 1.3;
        q.scaleY = q.scaleX;
        k.addChild(q);
        l = new createjs.Text(TEXT_SELECT_PLAYER_0, " 30px " + PRIMARY_FONT, "#FFFFFF");
        l.textBaseline = "middle";
        l.textAlign = "center";
        l.x = q.x;
        l.y = q.y - 130;
        k.addChild(l);
        r = s_oSpriteLibrary.getSprite("but_next");
        t = new CGfxButton(CANVAS_WIDTH - 460, CANVAS_HEIGHT - 260, r, k);
        t.addEventListener(ON_MOUSE_UP, this.onSelectedPlayer, this);
        r = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - (r.width / 2 + 10);
        d = r.height / 2 + 10;
        v = new CGfxButton(f,
            d, r, k);
        v.addEventListener(ON_MOUSE_UP, this.onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c = f - (r.width + 10), e = d, r = s_oSpriteLibrary.getSprite("audio_icon"), z = new CToggle(c, e, r, s_bAudioActive, k), z.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = window.document;
        w = r.documentElement;
        y = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        A = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN &&
            (y = !1);
        y && !inIframe() && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), b = r.width / 4 + 10, a = r.height / 2 + 10, x = new CToggle(b, a, r, s_bFullscreen, k), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos();
        s_oSelectPlayer = this
    };
    this.refreshButtonPos = function () {
        v.setPosition(f - s_iOffsetX, d + s_iOffsetY);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || z.setPosition(c - s_iOffsetX, e + s_iOffsetY);
        y && !inIframe() && x.setPosition(b + s_iOffsetX, a + s_iOffsetY)
    };
    this.resetFullscreenBut = function () {
        x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? A.call(window.document) : y.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.onSelectedFlag = function (a) {
        n !== a && (n = a, l.text = h[a], k.removeChild(q), q = this.getSpritePlayer(g[a]), q.x = CANVAS_WIDTH / 2 + 215, q.y = CANVAS_HEIGHT / 2, q.scaleX = 1.3, q.scaleY = q.scaleX, k.addChild(q))
    };
    this.onSelectedPlayer = function () {
        s_iIndexPlayer = n;
        this.unload();
        s_oMain.gotoLevelMenu()
    };
    this.getSpritePlayer = function (a) {
        a = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle"]
            }
        });
        return createSprite(a, "idle", 52.5, 68, 105, 136)
    };
    this.unload = function () {
        for (var a = 0; a < p.length; a++) p[a].unload();
        t.unload();
        v.unload();
        s_oSelectPlayer = null;
        s_oStage.removeChild(k)
    };
    this.onExit = function () {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayer = null;

function CPlayer(b, a, c) {
    var e, f, d;
    this.init = function (a, b, c) {
        f = c;
        e = new createjs.Container;
        e.x = a;
        e.y = b;
        f.addChild(e);
        a = {
            images: [s_oSpriteLibrary.getSprite("player_" + s_iIndexPlayer)],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle", .8],
                shot: [12, 16, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        d = createSprite(a, "idle", 52.5, 68, 105, 136);
        e.addChild(d)
    };
    this.onShot = function () {
        d.gotoAndPlay("shot")
    };
    this.init(b, a, c)
}

function CRollingTextController(b, a, c, e, f) {
    var d, g, m, h, k, u, l, p, q, n, t, x, v;
    this._init = function (a, b, c, d, f) {
        q = [];
        n = [];
        k = d;
        this.setUpdateInfo(c);
        p = f;
        x = a;
        v = b
    };
    this.unload = function () {
        clearInterval(l)
    };
    this.setUpdateInfo = function (a) {
        m = 0;
        h = m + a;
        d = 0;
        g = Math.round(k / FPS);
        u = 0;
        var b = this;
        l = setInterval(function () {
            b.update()
        }, FPS_TIME)
    };
    this.addEventListener = function (a, b, c) {
        q[a] = b;
        n[a] = c
    };
    this.addRollingListener = function (a, b, c) {
        q[ON_CONTROLLER_ROLL] = a;
        n[ON_CONTROLLER_ROLL] = b;
        t = [];
        for (a = 0; a < c.length; a++) t[a] = {
            step: c[a],
            flag: !1
        }
    };
    this.increaseValue = function (a) {
        u = a
    };
    this.getTarget = function () {
        return x
    };
    this.update = function () {
        d++;
        if (d > g) d = 0, x.text = h.toFixed(0), null !== v && (v.text = h.toFixed(0)), clearInterval(l), null !== q[ON_CONTROLLER_END] && q[ON_CONTROLLER_END].call(n[ON_CONTROLLER_END], this), 0 < u ? this.setUpdateInfo(u) : q[ON_CONTROLLER_REMOVE].call(n[ON_CONTROLLER_REMOVE], this);
        else {
            switch (p) {
                case EASE_BACKIN:
                    var a = s_oTweenController.easeInBack(d, 0, 1, g);
                    break;
                case EASE_BACKOUT:
                    a = s_oTweenController.easeOutBack(d, 0, 1, g);
                    break;
                case EASE_CUBIC_IN:
                    a = s_oTweenController.easeInCubic(d, 0, 1, g);
                    break;
                case EASE_CUBIC_OUT:
                    a = s_oTweenController.easeOutCubic(d, 0, 1, g);
                    break;
                case EASE_ELASTIC_OUT:
                    a = s_oTweenController.easeOutElastic(d, 0, 1, g);
                    break;
                case EASE_LINEAR:
                    a = s_oTweenController.easeLinear(d, 0, 1, g);
                    break;
                case EASE_QUART_BACKIN:
                    a = s_oTweenController.easeBackInQuart(d, 0, 1, g);
                    break;
                default:
                    a = s_oTweenController.easeLinear(d, 0, 1, g)
            }
            a = s_oTweenController.tweenValue(m, h, a);
            for (var b = 0; b < t.length; b++) a >= t[b].step && !t[b].flag && (t[b].flag = !0,
                null !== q[ON_CONTROLLER_ROLL] && q[ON_CONTROLLER_ROLL].call(n[ON_CONTROLLER_ROLL], b));
            x.text = a.toFixed(0);
            null !== v && (v.text = a.toFixed(0))
        }
    };
    this._init(b, a, c, e, f)
}
var EASE_LINEAR = 0,
    EASE_CUBIC_IN = 1,
    EASE_QUART_BACKIN = 2,
    EASE_BACKIN = 3,
    EASE_SIN_IN = 4,
    EASE_QUAD_IN = 5,
    EASE_CUBIC_OUT = 6,
    EASE_ELASTIC_OUT = 7,
    EASE_BACKOUT = 8,
    EASE_QUINT_OUT = 9,
    EASE_CUBIC_INOUT = 10;

function CTweenController() {
    this.tweenValue = function (b, a, c) {
        return b + c * (a - b)
    };
    this.easeLinear = function (b, a, c, e) {
        return c * b / e + a
    };
    this.easeInCubic = function (b, a, c, e) {
        e = (b /= e) * b * b;
        return a + c * e
    };
    this.easeBackInQuart = function (b, a, c, e) {
        e = (b /= e) * b;
        return a + c * (2 * e * e + 2 * e * b + -3 * e)
    };
    this.easeInBack = function (b, a, c, e) {
        return c * (b /= e) * b * (2.70158 * b - 1.70158) + a
    };
    this.easeInSine = function (b, a, c, e) {
        return -c * Math.cos(b / e * (Math.PI / 2)) + c + a
    };
    this.easeInQuad = function (b, a, c, e) {
        return c * (b /= e) * b + a
    };
    this.easeOutCubic = function (b,
        a, c, e) {
        return c * ((b = b / e - 1) * b * b + 1) + a
    };
    this.easeOutElastic = function (b, a, c, e) {
        if (0 === b) return a;
        if (1 === (b /= e)) return a + c;
        var f = .3 * e;
        return c * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f / 4) * Math.PI / f) + c + a
    };
    this.easeOutBack = function (b, a, c, e) {
        return c * ((b = b / e - 1) * b * (2.70158 * b + 1.70158) + 1) + a
    };
    this.easeInOutCubic = function (b, a, c, e) {
        return 1 > (b /= e / 2) ? c / 2 * b * b * b + a : c / 2 * ((b -= 2) * b * b + 2) + a
    };
    this.easeOutQuint = function (b, a, c, e) {
        return c * ((b = b / e - 1) * b * b * b * b + 1) + a
    }
}

function CGoal(b, a, c, e) {
    var f, d, g, m, h, k;
    this.init = function (a, b, c, e) {
        g = a;
        m = b;
        h = c;
        k = e;
        a = s_oSpriteLibrary.getSprite("goal_front");
        f = createBitmap(a, a.width, a.height);
        f.x = CANVAS_WIDTH / 2 + 435;
        f.y = CANVAS_HEIGHT / 2 + 50;
        m.addChild(f);
        a = s_oSpriteLibrary.getSprite("goal_back");
        d = createBitmap(a, a.width, a.height);
        d.x = f.x - 6;
        d.y = f.y - 6;
        g.addChild(d)
    };
    this.getPhysics = function () {
        return h
    };
    this.getSensor = function () {
        return k
    };
    this.init(b, a, c, e)
}
TEXT_TITLE_SELECT_PLAYERS = "SELECT A PLAYER";
TEXT_SELECT_PLAYER_0 = "ARGENTINA";
TEXT_SELECT_PLAYER_1 = "BRAZIL";
TEXT_SELECT_PLAYER_2 = "ENGLAND";
TEXT_SELECT_PLAYER_3 = "FRANCE";
TEXT_SELECT_PLAYER_4 = "GERMANY";
TEXT_SELECT_PLAYER_5 = "ITALY";
TEXT_SELECT_PLAYER_6 = "NETHERLAND";
TEXT_SELECT_PLAYER_7 = "SPAIN";
TEXT_SCORE = "SCORE: ";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_GAMEOVER = "YOU PASSED THIS TRAINING STAGE!";
TEXT_GAMEOVER_2 = "YOU FAILED THIS TRAINING STAGE";
TEXT_GAMEOVER_3 = "YOU'VE FINALLY COMPLETED YOUR WORKOUT!";
TEXT_LEVEL = "LEVEL";
TEXT_TOT_SCORE = "TOTAL SCORE";
TEXT_HELP1_PC = "CLICK THE BALL AND DRAG TO SET POWER AND DIRECTION";
TEXT_HELP1_MOBILE = "TOUCH THE BALL AND DRAG THE FINGER TO SET POWER AND DIRECTION";
TEXT_DEVELOPED = "DEVELOPED BY";
TEXT_DELETE_SAVE = "ALL YOUR PROGRESSES WILL BE DELETED\n\nARE YOU SURE?";
TEXT_SELECT_MODE_MENU = "SELECT MODE";
TEXT_SELECT_LEVEL = "SELECT A LEVEL";
TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var b, a, c, e, f, d, g;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function () {
        g.removeAllChildren()
    };
    this.hide = function () {
        var a = this;
        setTimeout(function () {
            createjs.Tween.get(d).to({
                alpha: 1
            }, 500).call(function () {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function () {};
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        g.addChild(m);
        m = s_oSpriteLibrary.getSprite("progress_bar");
        e = createBitmap(m);
        e.x = CANVAS_WIDTH / 2 - m.width / 2;
        e.y = CANVAS_HEIGHT - 200;
        g.addChild(e);
        b = m.width;
        a = m.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(e.x, e.y, 1, a);
        g.addChild(f);
        e.mask =
            f;
        c = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT - 155;
        c.shadow = new createjs.Shadow("#000", 2, 2, 2);
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        g.addChild(c);
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        g.addChild(d)
    };
    this.refreshLoader = function (d) {
        c.text = d + "%";
        f.graphics.clear();
        d = Math.floor(d * b / 100);
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(e.x, e.y, d, a)
    };
    this._init()
}

function CMain(b) {
    var a, c = 0,
        e = 0,
        f = STATE_LOADING,
        d, g;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function (a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oTweenController = new CTweenController;
        d = new CPreloader
    };
    this.preloaderReady = function () {
        this.onLoadedJSON();
        a = !0
    };
    this.onLoadedJSON = function () {
        var a = [
    
          {
          "obstacles": [],
          "teammates": [],
          "star_0": {"x": 400, "y": 520},
          "star_1": {"x": 680, "y": 520},
          "star_2": {"x": 900, "y": 520}},
            
          {
                "obstacles": [{"type": 2, "x":730, "y":565}],
          "teammates": [],
          "star_0": {"x": 430, "y": 430},
          "star_1": {"x": 1000, "y": 520},
          "star_2": {"x": 900, "y": 520}},
            
          {
          "obstacles": [{"type": 2, "x":430, "y":565},{"type": 2, "x":570, "y":365}],
          "teammates": [{"x": 600, "y": 565}],
          "star_0": {"x": 430, "y": 430},
          "star_1": {"x": 680, "y": 520},
          "star_2": {"x": 900, "y": 520}},
            
          {
          "obstacles": [{"type": 2, "x":900, "y":365},{"type": 2, "x":900, "y":295},{"type": 2, "x":900, "y":225},{"type": 2, "x":570, "y":365}],
          "teammates": [{"x": 580, "y": 295},{"x": 730, "y": 565}],
          "star_0": {"x": 800, "y": 290},
          "star_1": {"x": 440, "y": 290},
          "star_2": {"x": 900, "y": 520}},
            
            {
          "obstacles": [{"type": 5, "x":400, "y":560},{"type": 2, "x":590, "y":565},{"type": 2, "x":670, "y":565},{"type": 2, "x":860, "y":395},
                    {"type": 2, "x":940, "y":395},{"type": 7, "x":870, "y":295}],
          "teammates": [{"x": 780, "y": 585}],
          "star_0": {"x": 640, "y": 450},
          "star_1": {"x": 490, "y": 470},
          "star_2": {"x": 900, "y": 500}},
            
            {
          "obstacles": [{"type": 2, "x":590, "y":565},{"type": 3, "x":390, "y":575},{"type": 2, "x":590, "y":495},{"type": 2, "x":590, "y":425},
                    {"type": 4, "x":590, "y":355},{"type": 1, "x":1050, "y":295}],
          "teammates": [{"x": 750, "y": 585}],
          "star_0": {"x": 640, "y": 470},
          "star_1": {"x": 410, "y": 450},
          "star_2": {"x": 900, "y": 550}},
            
            {
          "obstacles": [{"type": 6, "x":540, "y":605},{"type": 6, "x":480, "y":605},{"type": 6, "x":420, "y":605},{"type": 5, "x":700, "y":560},{"type": 2, "x":900, "y":450}],
          "teammates": [{"x": 620, "y": 585}],
          "star_0": {"x": 715, "y": 510},
          "star_1": {"x": 410, "y": 450},
          "star_2": {"x": 1000, "y": 530}},
            
            {
          "obstacles": [{"type": 2, "x":540, "y":565},{"type": 2, "x":540, "y":495},{"type": 2, "x":540, "y":425},{"type": 2, "x":540, "y":355},{"type": 2, "x":710, "y":495},
                {"type": 2, "x":710, "y":425},{"type": 2, "x":710, "y":355},{"type": 2, "x":710, "y":285},{"type": 2, "x":710, "y":215},{"type": 1, "x":440, "y":70}],
          "teammates": [{"x": 620, "y": 585}],
          "star_0": {"x": 680, "y": 550},
          "star_1": {"x": 600, "y": 350},
          "star_2": {"x": 1000, "y": 530}},
            
            {
          "obstacles": [{"type": 4, "x":540, "y":565},{"type": 4, "x":540, "y":495},{"type": 4, "x":540, "y":425},{"type": 4, "x":540, "y":355},{"type": 2, "x":710, "y":495},
                {"type": 4, "x":710, "y":425},{"type": 4, "x":710, "y":355},{"type": 4, "x":710, "y":285},{"type": 4, "x":710, "y":215},{"type": 1, "x":440, "y":70},
                {"type": 3, "x":340, "y":580}],
          "teammates": [{"x": 620, "y": 585}],
          "star_0": {"x": 680, "y": 550},
          "star_1": {"x": 600, "y": 350},
          "star_2": {"x": 1000, "y": 530}},
            
            {
          "obstacles": [{"type": 2, "x":540, "y":565},{"type": 2, "x":540, "y":495},{"type": 2, "x":540, "y":425},{"type": 2, "x":540, "y":355},{"type": 2, "x":870, "y":425},
                    {"type": 2, "x":870, "y":355},{"type": 2, "x":870, "y":575},
                {"type": 2, "x":710, "y":425},{"type": 2, "x":710, "y":355},{"type": 2, "x":870, "y":285},{"type": 2, "x":870, "y":215},{"type": 1, "x":440, "y":70},
                {"type": 3, "x":340, "y":580}],
          "teammates": [{"x": 620, "y": 585},{"x": 550, "y": 285},{"x": 960, "y": 585}],
          "star_0": {"x": 845, "y": 480},
          "star_1": {"x": 600, "y": 350},
          "star_2": {"x": 760, "y": 250}},
            
                {
          "obstacles": [{"type": 6, "x":700, "y":600},{"type": 6, "x":635, "y":600},{"type": 6, "x":570, "y":600},{"type": 6, "x":505, "y":600},
                    {"type": 6, "x":440, "y":600},{"type": 2, "x":455, "y":370},{"type": 2, "x":533, "y":370},{"type": 2, "x":611, "y":370},{"type": 2, "x":689, "y":370},
                {"type": 2, "x":767, "y":370},{"type": 2, "x":923, "y":440},{"type": 2, "x":923, "y":370},
            {"type": 2, "x":923, "y":230},{"type": 2, "x":923, "y":160},{"type": 2, "x":923, "y":90},{"type": 2, "x":1051, "y":310},{"type": 3, "x":895, "y":310}],
          "teammates": [{"x": 550, "y": 300},{"x": 810, "y": 565}],
          "star_0": {"x": 815, "y": 220},
          "star_1": {"x": 360, "y": 270},
          "star_2": {"x": 815, "y": 415}},
            
            {
          "obstacles": [{"type": 2, "x":455, "y":565},{"type": 2, "x":615, "y":355},{"type": 2, "x":620, "y":565},
                    {"type": 2, "x":537, "y":565},{"type": 2, "x":870, "y":425},
                {"type": 2, "x":700, "y":565},{"type": 6, "x":700, "y":530},{"type": 2, "x":700, "y":355},{"type": 2, "x":530, "y":355},
                {"type": 1, "x":440, "y":70},{"type": 2, "x":1030, "y":285},{"type": 2, "x":1030, "y":215},{"type": 2, "x":1030, "y":145},{"type": 2, "x":1030, "y":75}],
          "teammates": [{"x": 600, "y": 280},{"x": 780, "y": 565}],
          "star_0": {"x": 925, "y": 230},
          "star_1": {"x": 400, "y": 320},
          "star_2": {"x": 745, "y": 350}},
            
        
            
            {
          "obstacles": [{"type": 5, "x":300, "y":560},{"type": 5, "x":650, "y":560},{"type": 2, "x":678, "y":450},{"type": 2, "x":600, "y":450},{"type": 2, "x":522, "y":450},
                    {"type": 2, "x":444, "y":450},{"type": 7, "x":760, "y":450},{"type": 1, "x":1060, "y":300}],
          "teammates": [{"x": 820, "y": 565}],
          "star_0": {"x": 740, "y": 360},
          "star_1": {"x": 500, "y": 240},
          "star_2": {"x": 400, "y": 340}},
            
            {
          "obstacles": [{"type": 7, "x":340, "y":280},{"type": 7, "x":490, "y":280},{"type": 7, "x":640, "y":280}
                    ,{"type": 7, "x":540, "y":560},{"type": 1, "x":500, "y":300},{"type": 1, "x":650, "y":300},{"type": 1, "x":800, "y":300}],
          "teammates": [],
          "star_0": {"x": 900, "y": 520},
          "star_1": {"x": 500, "y": 340},
          "star_2": {"x": 680, "y": 400}},
            
            {
          "obstacles": [
                    {"type": 3, "x":560, "y":580},{"type": 3, "x":690, "y":580},{"type": 3, "x":800, "y":580},
                {"type": 2, "x":500, "y":495},{"type": 2, "x":578, "y":495},{"type": 2, "x":656, "y":495},{"type": 2, "x":734, "y":495},{"type": 2, "x":890, "y":495},
                    {"type": 2, "x":890, "y":425},{"type": 1, "x":800, "y":280},
                    {"type": 2, "x":500, "y":355},{"type": 2, "x":578, "y":355},{"type": 2, "x":656, "y":355},{"type": 2, "x":734, "y":355},{"type": 2, "x":890, "y":355},
                {"type": 6, "x":1080, "y":600}, {"type": 7, "x":520, "y":270}],
          "teammates": [{"x": 970, "y": 565}],
          "star_0": {"x": 925, "y": 270},
          "star_1": {"x": 865, "y": 550},
          "star_2": {"x": 790, "y": 515}}
        
        ];
        
        s_oLevelSettings = new CLevelSettings(a);
        try {
            saveItem("ls_available", "ok"), s_oMain.loadUserData()
        } catch (k) {
            s_bStorageAvailable = !1;
            s_aScores = [];
            for (a = 0; a < NUM_LEVELS; a++) s_aScores[a] = 0;
            s_aStars = [];
            for (a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0;
            s_iLastLevel = 1
        }
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
    };
    this.loadUserData = function () {
        var a = getItem(LS_SCORES);
        if (null === a)
            for (s_aScores = [], a = 0; a < NUM_LEVELS; a++) s_aScores[a] = 0;
        else s_aScores = JSON.parse(a);
        a = getItem(LS_STARS);
        if (null === a)
            for (s_aStars = [], a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0;
        else s_aStars = JSON.parse(a);
        s_iLastLevel = null === getItem(LS_LAST_LEVEL) ? 1 : parseInt(getItem(LS_LAST_LEVEL))
    };
    this.soundLoaded = function () {
        c++;
        d.refreshLoader(Math.floor(c / e * 100));
        c === e && this._onPreloaderComplete()
    };
    this._initSounds = function () {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "applause",
            loop: !1,
            volume: 1,
            ingamename: "applause"
        });
        a.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        a.push({
            path: "./sounds/",
            filename: "kick",
            loop: !0,
            volume: 1,
            ingamename: "kick"
        });
        a.push({
            path: "./sounds/",
            filename: "goal",
            loop: !0,
            volume: 1,
            ingamename: "goal"
        });
        a.push({
            path: "./sounds/",
            filename: "star",
            loop: !0,
            volume: 1,
            ingamename: "star"
        });
        a.push({
            path: "./sounds/",
            filename: "post",
            loop: !0,
            volume: 1,
            ingamename: "post"
        });
        a.push({
            path: "./sounds/",
            filename: "duck_hit",
            loop: !0,
            volume: 1,
            ingamename: "duck_hit"
        });
        a.push({
            path: "./sounds/",
            filename: "wood_hit",
            loop: !0,
            volume: 1,
            ingamename: "wood_hit"
        });
        a.push({
            path: "./sounds/",
            filename: "metal_hit",
            loop: !0,
            volume: 1,
            ingamename: "metal_hit"
        });
        e += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] =
            new Howl({
                src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
                autoplay: !1,
                preload: !0,
                loop: a[b].loop,
                volume: a[b].volume,
                onload: s_oMain.soundLoaded()
            })
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("goal_text", "./sprites/goal_text.png");
        s_oSpriteLibrary.addSprite("but_delete_save", "./sprites/but_delete_save.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_no",
            "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_restart_big", "./sprites/but_restart_big.png");
        s_oSpriteLibrary.addSprite("but_next_big", "./sprites/but_next_big.png");
        s_oSpriteLibrary.addSprite("arrow_ball", "./sprites/arrow_ball.png");
        s_oSpriteLibrary.addSprite("arrow_fill", "./sprites/arrow_fill.png");
        s_oSpriteLibrary.addSprite("arrow_frame", "./sprites/arrow_frame.png");
        s_oSpriteLibrary.addSprite("star", "./sprites/star.png");
        s_oSpriteLibrary.addSprite("goal_front", "./sprites/goal_front.png");
        s_oSpriteLibrary.addSprite("goal_back", "./sprites/goal_back.png");
        s_oSpriteLibrary.addSprite("player", "./sprites/player.png");
        s_oSpriteLibrary.addSprite("star_outline", "./sprites/star_outline.png");
        s_oSpriteLibrary.addSprite("cube", "./sprites/cube.png");
        s_oSpriteLibrary.addSprite("cube_2", "./sprites/cube_2.png");
        s_oSpriteLibrary.addSprite("training_cone", "./sprites/training_cone.png");
        s_oSpriteLibrary.addSprite("player_0", "./sprites/argentina.png");
        s_oSpriteLibrary.addSprite("player_1", "./sprites/brazil.png");
        s_oSpriteLibrary.addSprite("player_2", "./sprites/england.png");
        s_oSpriteLibrary.addSprite("player_3", "./sprites/france.png");
        s_oSpriteLibrary.addSprite("player_4", "./sprites/germany.png");
        s_oSpriteLibrary.addSprite("player_5", "./sprites/italy.png");
        s_oSpriteLibrary.addSprite("player_6", "./sprites/netherland.png");
        s_oSpriteLibrary.addSprite("player_7", "./sprites/spain.png");
        s_oSpriteLibrary.addSprite("panel_0", "./sprites/argentina_panels.png");
        s_oSpriteLibrary.addSprite("panel_1", "./sprites/brazil_panels.png");
        s_oSpriteLibrary.addSprite("panel_2", "./sprites/england_panels.png");
        s_oSpriteLibrary.addSprite("panel_3", "./sprites/france_panels.png");
        s_oSpriteLibrary.addSprite("panel_4", "./sprites/germany_panels.png");
        s_oSpriteLibrary.addSprite("panel_5", "./sprites/italy_panels.png");
        s_oSpriteLibrary.addSprite("panel_6", "./sprites/netherland_panels.png");
        s_oSpriteLibrary.addSprite("panel_7", "./sprites/spain_panels.png");
        s_oSpriteLibrary.addSprite("flag_0", "./sprites/flag_0.png");
        s_oSpriteLibrary.addSprite("flag_1",
            "./sprites/flag_1.png");
        s_oSpriteLibrary.addSprite("flag_2", "./sprites/flag_2.png");
        s_oSpriteLibrary.addSprite("flag_3", "./sprites/flag_3.png");
        s_oSpriteLibrary.addSprite("flag_4", "./sprites/flag_4.png");
        s_oSpriteLibrary.addSprite("flag_5", "./sprites/flag_5.png");
        s_oSpriteLibrary.addSprite("flag_6", "./sprites/flag_6.png");
        s_oSpriteLibrary.addSprite("flag_7", "./sprites/flag_7.png");
        s_oSpriteLibrary.addSprite("wedge", "./sprites/wedge.png");
        s_oSpriteLibrary.addSprite("cone", "./sprites/cone.png");
        s_oSpriteLibrary.addSprite("duck",
            "./sprites/duck.png");
        s_oSpriteLibrary.addSprite("arrow_select_level", "./sprites/arrow_select_level.png");
        s_oSpriteLibrary.addSprite("but_kick", "./sprites/but_kick.png");
        s_oSpriteLibrary.addSprite("starbox", "./sprites/starbox.png");
        s_oSpriteLibrary.addSprite("contact_ball", "./sprites/contact_ball.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("supporters_0", "./sprites/supporters/supporters_0.png");
        s_oSpriteLibrary.addSprite("supporters_1", "./sprites/supporters/supporters_1.png");
        s_oSpriteLibrary.addSprite("supporters_2", "./sprites/supporters/supporters_2.png");
        s_oSpriteLibrary.addSprite("supporters_3", "./sprites/supporters/supporters_3.png");
        s_oSpriteLibrary.addSprite("supporters_4", "./sprites/supporters/supporters_4.png");
        s_oSpriteLibrary.addSprite("supporters_5", "./sprites/supporters/supporters_5.png");
        s_oSpriteLibrary.addSprite("supporters_6", "./sprites/supporters/supporters_6.png");
        s_oSpriteLibrary.addSprite("supporters_7", "./sprites/supporters/supporters_7.png");
        s_oSpriteLibrary.addSprite("supporters_8",
            "./sprites/supporters/supporters_8.png");
        s_oSpriteLibrary.addSprite("supporters_9", "./sprites/supporters/supporters_9.png");
        s_oSpriteLibrary.addSprite("supporters_10", "./sprites/supporters/supporters_10.png");
        s_oSpriteLibrary.addSprite("supporters_11", "./sprites/supporters/supporters_11.png");
        s_oSpriteLibrary.addSprite("supporters_12", "./sprites/supporters/supporters_12.png");
        s_oSpriteLibrary.addSprite("supporters_13", "./sprites/supporters/supporters_13.png");
        s_oSpriteLibrary.addSprite("supporters_14",
            "./sprites/supporters/supporters_14.png");
        s_oSpriteLibrary.addSprite("supporters_15", "./sprites/supporters/supporters_15.png");
        s_oSpriteLibrary.addSprite("supporters_16", "./sprites/supporters/supporters_16.png");
        s_oSpriteLibrary.addSprite("supporters_17", "./sprites/supporters/supporters_17.png");
        s_oSpriteLibrary.addSprite("supporters_18", "./sprites/supporters/supporters_18.png");
        s_oSpriteLibrary.addSprite("supporters_19", "./sprites/supporters/supporters_19.png");
        s_oSpriteLibrary.addSprite("supporters_20",
            "./sprites/supporters/supporters_20.png");
        s_oSpriteLibrary.addSprite("supporters_21", "./sprites/supporters/supporters_21.png");
        s_oSpriteLibrary.addSprite("supporters_22", "./sprites/supporters/supporters_22.png");
        s_oSpriteLibrary.addSprite("supporters_23", "./sprites/supporters/supporters_23.png");
        s_oSpriteLibrary.addSprite("supporters_24", "./sprites/supporters/supporters_24.png");
        s_oSpriteLibrary.addSprite("supporters_25", "./sprites/supporters/supporters_25.png");
        s_oSpriteLibrary.addSprite("supporters_26",
            "./sprites/supporters/supporters_26.png");
        s_oSpriteLibrary.addSprite("supporters_27", "./sprites/supporters/supporters_27.png");
        s_oSpriteLibrary.addSprite("supporters_28", "./sprites/supporters/supporters_28.png");
        s_oSpriteLibrary.addSprite("supporters_29", "./sprites/supporters/supporters_29.png");
        s_oSpriteLibrary.addSprite("supporters_30", "./sprites/supporters/supporters_30.png");
        s_oSpriteLibrary.addSprite("help_touch", "./sprites/help_touch.png");
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function () {
        c++;
        d.refreshLoader(Math.floor(c / e * 100));
        c === e && this._onPreloaderComplete()
    };
    this._onAllImagesLoaded = function () {};
    this._onPreloaderComplete = function () {
        d.unload();
        isIOS() || (s_oSoundtrack = playSound("soundtrack", 1, !0));
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded = function () {
        this._loadImages()
    };
    this.gotoMenu = function () {
        new CMenu;
        f = STATE_MENU;
        showMoreGames()
    };
    this.gotoGame = function () {
        g = new CGame(m);
        f = STATE_GAME;
        hideMoreGames()
    };
    this.gotoLevelMenu = function () {
        new CLevelMenu;
        f = STATE_LEVEL_SELECTION
    };
    this.gotoSelectMode = function () {
        new CSelectMode
    };
    this.gotoHelp = function () {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function () {
        a = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        a = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update =
        function (b) {
            if (!1 !== a) {
                var c = (new Date).getTime();
                s_iTimeElaps = c - s_iPrevTime;
                s_iCntTime += s_iTimeElaps;
                s_iCntFps++;
                s_iPrevTime = c;
                1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
                f === STATE_GAME && g.update();
                s_oStage.update(b)
            }
        };
    s_oMain = this;
    ENABLE_CHECK_ORIENTATION = b.check_orientation;
    ENABLE_FULLSCREEN = b.fullscreen;
    STAR_SCORE = b.star_score;
    var m = b;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_aScores, s_aStars, s_iLastLevel = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null,
    s_oCanvas, s_iIndexPlayer, s_oTweenController;

function CArrow(b, a, c) {
    var e, f, d, g, m, h, k;
    this._init = function (a, b) {
        e = new createjs.Container;
        e.x = a;
        e.y = b;
        u.addChild(e);
        var c = s_oSpriteLibrary.getSprite("arrow");
        d = createBitmap(c);
        d.regY = .5 * c.height;
        e.addChild(d);
        g = createBitmap(s_oSpriteLibrary.getSprite("arrow_fill"));
        g.regY = .5 * c.height;
        e.addChild(g);
        h = c.width;
        k = c.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, h, k);
        f.regY = .5 * k;
        e.addChild(f);
        c = s_oSpriteLibrary.getSprite("arrow_frame");
        m = createBitmap(c);
        m.regX = 0;
        m.regY = .5 * c.height;
        e.addChild(m);
        g.mask = f
    };
    this.unload = function () {
        createjs.Tween.removeTweens(f);
        u.removeChild(e)
    };
    this.setVisible = function (a) {
        e.visible = a
    };
    this.setAngle = function (a) {
        e.rotation = a
    };
    this.animHelp = function (a) {
        f.scaleX = 0;
        createjs.Tween.get(f).to({
            scaleX: 1
        }, a, createjs.Ease.cubicInOut).call(function () {
            createjs.Tween.get(f).to({
                scaleX: 0
            }, a, createjs.Ease.cubicInOut).call(function () {
                l.animHelp(a)
            })
        })
    };
    this.setPosition = function (a, b) {
        e.x = a;
        e.y = b
    };
    this.setX = function (a) {
        e.x = a
    };
    this.setY = function (a) {
        e.y =
            a
    };
    this.getX = function () {
        return e.x
    };
    this.getY = function () {
        return e.y
    };
    this.mask = function (a) {
        f.graphics.clear();
        a = Math.floor(a * h / 100);
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, a, k)
    };
    var u = c;
    var l = this;
    this._init(b, a)
}

function CStar(b, a, c, e, f) {
    var d, g, m, h;
    this.init = function (a, b, c, f, e) {
        d = f.width;
        g = f.height;
        m = createBitmap(f);
        m.x = a;
        m.y = b;
        h = c;
        e.addChild(m)
    };
    this.setVisible = function (a) {
        m.visible = a
    };
    this.setPosition = function (a, b) {
        m.x = a;
        m.y = b
    };
    this.setAngle = function (a) {
        m.rotation = a
    };
    this.animCollected = function (a) {
        (new createjs.Tween.get(m)).to({
            x: a.x - d / 2,
            y: a.y + s_iOffsetY - g / 2
        }, 1E3, createjs.Ease.backInOut)
    };
    this.getX = function () {
        return m.x
    };
    this.getY = function () {
        return m.y
    };
    this.getImage = function () {
        return m
    };
    this.getPhysics =
        function () {
            return h
        };
    this.unload = function () {
        f.removeChild(m);
        h = m = null
    };
    this.animFade = function () {
        createjs.Tween.get(m).to({
            alpha: 0
        }, MS_ANIM_BALL_FADE, createjs.Ease.cubicOut)
    };
    this.init(a, c, e, b, f)
}

function CToggle(b, a, c, e, f) {
    var d, g, m, h, k, u, l;
    this._init = function (a, b, c, f, e) {
        k = [];
        u = [];
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        d = f;
        l = createSprite(g, "state_" + d, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        l.x = a;
        l.y = b;
        l.stop();
        e.addChild(l);
        this._initListener()
    };
    this.unload = function () {
        s_bMobile ? l.off("mousedown", g) : (l.off("mousedown", g), l.off("mouseover", h));
        l.off("pressup", m);
        f.removeChild(l)
    };
    this._initListener = function () {
        s_bMobile ? g = l.on("mousedown", this.buttonDown) : (g = l.on("mousedown", this.buttonDown), h = l.on("mouseover", this.buttonOver));
        m = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        k[a] = b;
        u[a] = c
    };
    this.setActive = function (a) {
        d = a;
        l.gotoAndStop("state_" + d)
    };
    this.buttonRelease = function () {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click");
        d = !d;
        l.gotoAndStop("state_" + d);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(u[ON_MOUSE_UP], d)
    };
    this.buttonDown = function () {
        l.scaleX = .9;
        l.scaleY =
            .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN])
    };
    this.buttonOver = function (a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function (a, b) {
        l.x = a;
        l.y = b
    };
    this._init(b, a, c, e, f)
}

function CGfxButton(b, a, c, e) {
    var f, d, g = [],
        m, h, k, u, l, p, q;
    this._init = function (a, b, c, e) {
        q = f = !1;
        d = 1;
        u = [];
        l = [];
        p = createBitmap(c);
        p.x = a;
        p.y = b;
        p.scaleX = p.scaleY = d;
        p.regX = c.width / 2;
        p.regY = c.height / 2;
        e.addChild(p);
        this._initListener()
    };
    this.unload = function () {
        s_bMobile ? p.off("mousedown", m) : (p.off("mousedown", m), p.off("mouseover", k));
        p.off("pressup", h);
        e.removeChild(p)
    };
    this.setVisible = function (a) {
        p.visible = a
    };
    this.setClickable = function (a) {
        f = !a
    };
    this._initListener = function () {
        s_bMobile ? m = p.on("mousedown", this.buttonDown) :
            (m = p.on("mousedown", this.buttonDown), k = p.on("mouseover", this.buttonOver));
        h = p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        u[a] = b;
        l[a] = c
    };
    this.addEventListenerWithParams = function (a, b, c, d) {
        u[a] = b;
        l[a] = c;
        g = d
    };
    this.buttonRelease = function () {
        f || (p.scaleX = d, p.scaleY = d, u[ON_MOUSE_UP] && u[ON_MOUSE_UP].call(l[ON_MOUSE_UP], g))
    };
    this.buttonDown = function () {
        f || (p.scaleX = .9 * d, p.scaleY = .9 * d, q || playSound("click", 1, 0), u[ON_MOUSE_DOWN] && u[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], g))
    };
    this.buttonOver =
        function (a) {
            s_bMobile || f || (a.target.cursor = "pointer")
        };
    this.pulseAnimation = function () {
        createjs.Tween.get(p).to({
            scaleX: .9 * d,
            scaleY: .9 * d
        }, 850, createjs.Ease.quadOut).to({
            scaleX: d,
            scaleY: d
        }, 650, createjs.Ease.quadIn).call(function () {
            n.pulseAnimation()
        })
    };
    this.trembleAnimation = function () {
        createjs.Tween.get(p).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function () {
            n.trebleAnimation()
        })
    };
    this.setPosition = function (a,
        b) {
        p.x = a;
        p.y = b
    };
    this.setX = function (a) {
        p.x = a
    };
    this.setY = function (a) {
        p.y = a
    };
    this.getButtonImage = function () {
        return p
    };
    this.getX = function () {
        return p.x
    };
    this.getY = function () {
        return p.y
    };
    this.setMuted = function (a) {
        q = a
    };
    var n = this;
    this._init(b, a, c, e);
    return this
}

function CMenu() {
    var b, a, c, e, f, d, g, m, h, k, u, l, p, q, n, t = null,
        x = null,
        v, z;
    this._init = function () {
        s_b2Players = !1;
        null !== s_oSoundtrack && void 0 !== s_oSoundtrack && setVolume("soundtrack", 1);
        u = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(u);
        var y = s_oSpriteLibrary.getSprite("but_play");
        b = CANVAS_WIDTH / 2;
        a = CANVAS_HEIGHT - y.height / 2 - 20;
        v = new CGfxButton(b, a, y, s_oStage);
        v.addEventListener(ON_MOUSE_DOWN, this._onButTournamentRelease, this);
        y = s_oSpriteLibrary.getSprite("but_info");
        h = y.height / 2 + 10;
        k = y.height / 2 + 10;
        q = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, y, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        y = s_oSpriteLibrary.getSprite("but_delete_save");
        s_bStorageAvailable && (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (c = CANVAS_WIDTH - 1.5 * y.height - 5, e = y.height / 2 + 10) : (c = CANVAS_WIDTH - y.width / 2 - 10, e = y.height / 2 + 10), z = new CGfxButton(c, e, y, s_oStage), z.addEventListener(ON_MOUSE_UP, s_oLevelSettings.deleteSaveData, this));
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"),
            g = CANVAS_WIDTH - y.height / 2, m = y.height / 2 + 10, p = new CToggle(g, m, y, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = window.document;
        var A = y.documentElement;
        t = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        x = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && !inIframe() && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), f = h + y.width / 2 + 10, d = y.height / 2 + 10, n = new CToggle(f,
            d, y, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 1E3).call(function () {
            l.visible = !1
        });
        s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos()
    };
    this.unload = function () {
        v.unload();
        s_bStorageAvailable && z.unload();
        l.visible = !1;
        q.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        t && !inIframe() && n.unload();
        s_oStage.removeAllChildren();
        s_oMenu = u = null
    };
    this.refreshButtonPos = function () {
        v.setPosition(b, a - s_iOffsetY);
        s_bStorageAvailable && z.setPosition(c - s_iOffsetX, e + s_iOffsetY);
        q.setPosition(h + s_iOffsetX, s_iOffsetY + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(g - s_iOffsetX, s_iOffsetY + m);
        t && !inIframe() && n.setPosition(f + s_iOffsetX, d + s_iOffsetY)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function () {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function () {
        n.setActive(s_bFullscreen)
    };
    this._onFullscreen = function () {
        s_bFullscreen ? x.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButTournamentRelease = function () {
        this.unload();
        $(s_oMain).trigger("start_session");
        new CSelectPlayer;
        !isIOS() || null !== s_oSoundtrack && void 0 !== s_oSoundtrack || (s_oSoundtrack = playSound("soundtrack", 1, !0))
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame() {
    var b, a, c, e = null,
        f, d, g, m, h;
    var k = !0;
    var u = !1,
        l, p = !1,
        q, n, t, x, v, z, y, A, r, w, C, B, I, E, D, H, G, F, J, M, K, L;
    this._init = function () {
        setVolume("soundtrack", .3);
        k = !0;
        w = B = !1;
        A = [];
        r = [];
        H = !1;
        for (var l = a = b = 0; l < s_oLevelSettings.getCurrentLevel(); l++) a += s_aScores[l];
        x = new createjs.Container;
        s_oStage.addChild(x);
        I = new createjs.Container;
        s_oStage.addChild(I);
        this.addStarBg();
        z = new createjs.Container;
        s_oStage.addChild(z);
        v = new createjs.Container;
        s_oStage.addChild(v);
        G = J = 0;
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        for (var p = [], n = 0; 31 > n; n++) p.push(s_oSpriteLibrary.getSprite("supporters_" + n));
        p = new createjs.SpriteSheet({
            images: p,
            frames: {
                width: 1360,
                height: 245
            },
            animations: {
                idle: [0, 0, "idle"],
                anim: [0, 30, "idle"]
            }
        });
        M = createSprite(p, "idle", 0, 0, 1360, 245);
        x.addChild(l, M);
        s_oPhysicsController = new CPhysicsController;
        f = new CPhysicsObject;
        f.createAContactListener();
        g = TIME_FOR_LAUNCH;
        l = s_oSpriteLibrary.getSprite("ball");
        BALL_RADIUS = .5 * l.width;
        this._createBall(l, CANVAS_WIDTH / 2 - 400, BALL_START_Y, BALL_DENSITY, BALL_FRICTION, BALL_RESTITUTION);
        y = new CPlayer(d.getX() - 30, d.getY() - 40, x);
        for (n = 0; n < OBSTACLES_INFO.length; n++) new CObstacles(OBSTACLES_INFO[n].type, OBSTACLES_INFO[n].x, OBSTACLES_INFO[n].y, I, A);
        for (n = 0; n < TEAMMATES_INFO.length; n++) r.push(new CTeamMate(n, TEAMMATES_INFO[n].x, TEAMMATES_INFO[n].y, I));
        f.addRectangle({
            density: 1,
            friction: .7,
            width: CANVAS_WIDTH,
            height: 10,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 + 190,
            angle: 0,
            restitution: .5,
            isSensor: !1
        });
        m = new CArrow(0, 0, v);
        m.setVisible(!1);
        E = [];
        D = [];
        for (n = 0; n < STARS_INFO.length; n++) this.createStar(STARS_INFO[n].x,
            STARS_INFO[n].y, n, E);
        for (n = 0; 3 > n; n++) D.push(!0);
        this._createGoal();
        l = s_oSpriteLibrary.getSprite("contact_ball");
        F = new createBitmap(l, l.width, l.height);
        F.regX = l.width / 2;
        F.regY = l.height / 2;
        F.alpha = 0;
        z.addChild(F);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.on("mousedown", this.onMouseDown);
        h.on("pressmove", this.onPressMove);
        h.on("pressup", this.onPressUp);
        s_oStage.addChild(h);
        c = new CInterface(a);
        e = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        0 === s_oLevelSettings.getCurrentLevel() && new CHelpPanel(s_oStage);
        this.refreshButtonPos();
        // $(s_oMain).trigger("start_level", s_oLevelSettings.getCurrentLevel());
     
    };
    this.refreshButtonPos = function () {
        for (var a = 0; 3 > a; a++) K[a].y = L + s_iOffsetY;
        c.refreshButtonPos()
    };
    this._createBall = function (a, b, c, e, g, k) {
        e = f.addBall(a.width / 2, b, c, e, g, k);
        d = new CBall(b, c, e, a, z)
    };
    this.addStarBg = function () {
        var a = s_oSpriteLibrary.getSprite("star_outline"),
            b = CANVAS_WIDTH / 2 - a.width - 10;
        L = a.height / 2 + 10;
        K = [];
        for (var c = 0; 3 >
            c; c++) {
            var d = createBitmap(a);
            d.regX = a.width / 2;
            d.regY = a.height / 2;
            d.x = b;
            d.y = L;
            s_oStage.addChild(d);
            b += a.width + 10;
            K.push(d)
        }
    };
    this.createStar = function (a, b, c) {
        var d = s_oSpriteLibrary.getSprite("star");
        c = f.addCircle(d.width / 2, a + d.width / 2, b + d.height / 2, 0, 0, 0, !0, {
            type: STAR,
            index: c,
            isSensor: !0
        });
        E.push(new CStar(d, a, b, c, z))
    };
    this._createGoal = function () {
        var a = [];
        a.push(new f.addRectangle({
            x: 1130,
            y: 485,
            width: 20,
            height: 4,
            density: 10,
            friction: 0,
            restitution: 1,
            angle: 50,
            sensor: !0,
            info: {
                type: GOAL_POST,
                isSensor: !0
            }
        }));
        a.push(new f.addRectangle({
            x: 1150,
            y: 470,
            width: 25,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .6,
            angle: 0,
            sensor: !1
        }));
        a.push(new f.addRectangle({
            x: 1180,
            y: 485,
            width: 20,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .6,
            angle: 55,
            sensor: !1
        }));
        a.push(new f.addRectangle({
            x: 1210,
            y: 550,
            width: 60,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .2,
            angle: 73,
            sensor: !1
        }));
        var b = new f.addRectangle({
            x: 1150,
            y: 555,
            width: 60,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .2,
            angle: 90,
            sensor: !0,
            info: {
                type: GOAL,
                isSensor: !0
            }
        });
        new CGoal(x,
            v, a, b)
    };
    this.onGoal = function () {
        if (!B) {
            B = !0;
            M.gotoAndPlay("anim");
            playSound("goal", 1, !1);
            s_oGame.showGoalText();
            for (var a = 0; a < D.length; a++) D[a] = !1
        }
    };
    this.onHitPost = function () {
        playSound("post", 1, !1)
    };
    this.onHitWoodCase = function () {
        playSound("wood_hit", 1, !1)
    };
    this.onHitMetalCase = function () {
        playSound("metal_hit", 1, !1)
    };
    this.duckCollision = function (a) {
        A[a].onDuckCollision();
        playSound("duck_hit", 1, !1)
    };
    this.showGoalText = function () {
        var d = new createjs.Shape;
        d.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH,
            CANVAS_HEIGHT);
        d.alpha = .01;
        d.on("mousedown", function () {}, this);
        s_oStage.addChild(d);
        var f = {
            images: [s_oSpriteLibrary.getSprite("goal_text")],
            frames: {
                width: 1158,
                height: 210,
                regX: 579,
                regY: 105
            },
            animations: {
                idle: [0, 1, "idle", .3]
            }
        };
        f = new createjs.SpriteSheet(f);
        C = createSprite(f, "idle", 579, 105, 1158, 210);
        C.x = .5 * CANVAS_WIDTH;
        C.y = .5 * CANVAS_HEIGHT;
        C.alpha = 0;
        C.scaleX = .3;
        C.scaleY = .3;
        s_oStage.addChild(C);
        b += G * STAR_SCORE;
        s_aStars[s_oLevelSettings.getCurrentLevel()] < G && (s_aStars[s_oLevelSettings.getCurrentLevel()] =
            G, saveItem(LS_STARS, JSON.stringify(s_aStars)));
        s_aScores[s_oLevelSettings.getCurrentLevel()] < b && (s_aScores[s_oLevelSettings.getCurrentLevel()] = b, saveItem(LS_SCORES, JSON.stringify(s_aScores)));
        s_iLastLevel < s_oLevelSettings.getNextLevel() && (s_iLastLevel = s_oLevelSettings.getNextLevel(), saveItem(LS_LAST_LEVEL, s_iLastLevel));
        a += b;
        c.refreshTotScore(a);
        (new createjs.Tween.get(C)).to({
            scaleX: .8,
            scaleY: .8,
            alpha: 1
        }, 900, createjs.Ease.cubicOut).wait(1300).to({
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, 300, createjs.Ease.cubicIn).call(function () {
            s_oStage.removeChild(C,
                d);
            e.show(b, 0, a)
        })
    };
    this.setPause = function (a) {
        w = a
    };
    this.starCollision = function (a) {
        !0 === D[a] && (E[a].animCollected({
            x: K[G].x,
            y: L
        }), G++, D[a] = !1, playSound("star", 1, !1))
    };
    this.teamMateCollision = function (a) {
        r[a].onShot();
        s_oGame.addImpulseToBall({
            x: CANVAS_WIDTH,
            y: -1 * randomIntBetween(1, 200)
        })
    };
    this.onMouseDown = function (a) {
        u || (q = {
            x: s_oStage.mouseX,
            y: s_oStage.mouseY
        }, m.setVisible(!0), m.setPosition(d.getX(), d.getY()))
    };
    this.onPressMove = function () {
        u || (l = {
                x: s_oStage.mouseX,
                y: s_oStage.mouseY
            }, s_oGame.arrowUpdate(),
            p = !0)
    };
    this._updatePlay = function () {
        if (k) {
            t = s_oPhysicsController.getElementVelocity(d.getPhysics());
            d.update(t);
            for (var a = 0; a < A.length; a++) A[a].update();
            H || (this.detectBallVelocityForLaunch(), this.detectBallOutOfRange());
            s_oPhysicsController.update();
            1 === F.alpha && (4 === J ? J = F.alpha = 0 : J++)
        }
    };
    this.detectBallOutOfRange = function () {
        if (d.getX() < BALL_OUT_OF_RANGE.xMin || d.getX() > BALL_OUT_OF_RANGE.xMax) H = !0, d.animFadeOut()
    };
    this.restartBallPos = function () {
        0 < b ? (s_oPhysicsController.setElementPosition(d.getPhysics(),
            d.getStartPos()), s_oPhysicsController.setElementLinearVelocity(d.getPhysics(), {
            x: 0,
            y: 0
        }), s_oPhysicsController.setElementAngularVelocity(d.getPhysics(), 0), d.animFadeIn()) : !1 === B && e.show(0, 1, a)
    };
    this.setBooleanLaunch = function (a) {
        u = a
    };
    this.restartGame = function () {
        this.unload();
        s_oMain.gotoGame()
    };
    this.detectBallVelocityForLaunch = function () {
        u && (t.x < MIN_VELOCITY_FOR_LAUNCH && t.x > -MIN_VELOCITY_FOR_LAUNCH && t.y < MIN_VELOCITY_FOR_LAUNCH && t.y > -MIN_VELOCITY_FOR_LAUNCH ? 0 > g ? (H = !0, s_oPhysicsController.setElementAngularVelocity(d.getPhysics(),
            0), s_oPhysicsController.setElementLinearVelocity(d.getPhysics(), {
            x: 0,
            y: 0
        }), d.animFadeOut()) : g -= s_iTimeElaps : g = TIME_FOR_LAUNCH)
    };
    this.unload = function () {
        k = !1;
        c.unload();
        this.destroyPhysicsEngine();
        h.removeAllEventListeners();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oGame = null
    };
    this.onPressUp = function () {
        m.setVisible(!1);
        if (p && !u) {
            var a = new CVector2(q.x - l.x, q.y - l.y);
            a.scalarProduct(n);
            var b = a.length();
            b > HIT_BALL_MIN_FORCE && (b > HIT_BALL_MAX_FORCE && (a.normalize(), a.scalarProduct(HIT_BALL_MAX_FORCE)),
                s_oGame.addImpulseToBall({
                    x: a.getX(),
                    y: a.getY()
                }), H = !1, y.onShot(), u = !0);
            l.x = 0;
            n = l.y = 0;
            p = !1
        }
    };
    this.arrowUpdate = function () {
        this.angleArrow();
        this.arrowMask()
    };
    this.angleArrow = function () {
        m.setAngle(180 / Math.PI * Math.atan2(q.y - l.y, q.x - l.x) + OFFSET_ANGLE_ARROW)
    };
    this.onExit = function () {
        N.unload();
        $(s_oMain).trigger("end_session");
        s_oMain.gotoLevelMenu()
    };
    this.destroyPhysicsEngine = function () {
        s_oPhysicsController.destroyAllBody();
        s_oPhysicsController.destroyWorld();
        s_oPhysicsController = null
    };
    this.arrowMask =
        function () {
            var a = Math.ceil(distanceV2(q, l));
            100 < a && (a = 100);
            this.setForce(a);
            m.mask(a)
        };
    this.setForce = function (a) {
        n = a * FORCE_MULTIPLIER
    };
    this.addImpulseToBall = function (a) {
        s_oPhysicsController.applyImpulse(d.getPhysics(), a);
        F.x = d.getX() - d.getRadius();
        F.y = d.getY();
        F.alpha = 1;
        playSound("kick", 1, !1)
    };
    this.addImpulseToCube = function (a, b) {
        s_oPhysicsController.applyImpulse(A[b].getPhysics(), a)
    };
    this.update = function () {
        w || this._updatePlay()
    };
    s_oGame = this;
    var N = this;
    this._init()
}
var s_oGame = null;

function CInterface(b) {
    var a, c, e, f, d, g, m, h, k, u, l, p, q, n, t, x, v = null,
        z = null,
        y, A, r, w, C;
    this._init = function (b) {
        t = new createjs.Container;
        s_oStage.addChild(t);
        var B = s_oSpriteLibrary.getSprite("but_exit");
        l = CANVAS_WIDTH - B.width / 2 - 10;
        p = B.height / 2 + 10;
        n = new CGfxButton(l, p, B, t);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = CANVAS_WIDTH - 1.5 * B.width - 20;
        u = B.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) B = s_oSpriteLibrary.getSprite("audio_icon"), q = new CToggle(k, u, B, s_bAudioActive, t), q.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        var E = window.document,
            D = E.documentElement;
        v = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        z = E.exitFullscreen || E.mozCancelFullScreen || E.webkitExitFullscreen || E.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && !inIframe() ? (B = s_oSpriteLibrary.getSprite("but_fullscreen"), m = B.width / 4 + 10, h = B.height / 2 + 10, e = m + B.width / 2 + 10, f = h, x = new CToggle(m, h, B, s_bFullscreen, t), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this)) : (e = B.width /
            4 + 10, f = B.height / 2 + 10);
        B = s_oSpriteLibrary.getSprite("but_restart");
        y = new CGfxButton(e, f, B, t);
        y.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
        d = 10;
        g = CANVAS_HEIGHT - 20;
        A = new createjs.Text(TEXT_LEVEL + " " + (s_oLevelSettings.getCurrentLevel() + 1), " 30px " + PRIMARY_FONT, "#000064");
        A.x = d;
        A.y = g;
        A.textAlign = "left";
        A.textBaseline = "alphabetic";
        A.outline = 3;
        s_oStage.addChild(A);
        r = new createjs.Text(A.text, " 30px " + PRIMARY_FONT, "#ff6c00");
        r.x = d;
        r.y = g;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        s_oStage.addChild(r);
        a = CANVAS_WIDTH - 10;
        c = CANVAS_HEIGHT - 20;
        C = new createjs.Text(TEXT_TOT_SCORE + " " + b, " 30px " + PRIMARY_FONT, "#000064");
        C.x = d;
        C.y = g;
        C.textAlign = "right";
        C.textBaseline = "alphabetic";
        C.outline = 3;
        s_oStage.addChild(C);
        w = new createjs.Text(C.text, " 30px " + PRIMARY_FONT, "#ff6c00");
        w.x = a;
        w.y = c;
        w.textAlign = "right";
        w.textBaseline = "alphabetic";
        s_oStage.addChild(w);
        this.refreshButtonPos()
    };
    this.starFadeOut = function () {
        (new createjs.Tween.get(void 0)).to({
            alpha: 0
        }, 700)
    };
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile) q.unload(), q = null;
        n.unload();
        s_oStage.removeChild(t);
        v && !inIframe() && x.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function () {
        y.setPosition(e + s_iOffsetX, f + s_iOffsetY);
        n.setPosition(l - s_iOffsetX, s_iOffsetY + p);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(k - s_iOffsetX, s_iOffsetY + u);
        v && !inIframe() && x.setPosition(m + s_iOffsetX, h + s_iOffsetY);
        A.x = d + s_iOffsetX;
        A.y = g - s_iOffsetY;
        r.x = d + s_iOffsetX;
        r.y = g - s_iOffsetY;
        C.x = a - s_iOffsetX;
        C.y = c - s_iOffsetY;
        w.x = a - s_iOffsetX;
        w.y = c - s_iOffsetY
    };
    this.refreshTotScore = function (a) {
        w.text = TEXT_TOT_SCORE + " " + a;
        C.text = TEXT_TOT_SCORE + " " + a
    };
    this.setOnTop = function () {
        s_oStage.addChildAt(t, s_oStage.numChildren)
    };
    this._onButRestartRelease = function () {
        var a = new createjs.Shape;
        a.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = 0;
        s_oStage.addChild(a);
        (new createjs.Tween.get(a)).to({
            alpha: 1
        }, 250).wait(200).call(function () {
            s_oGame.restartGame();
            s_oStage.addChildAt(a, s_oStage.numChildren);
            (new createjs.Tween.get(a)).to({
                    alpha: 0
                },
                250)
        })
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function () {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut = function () {
        x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? z.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(b);
    return this
}
var s_oInterface = null;

function CHelpPanel(b) {
    var a, c, e, f, d, g, m, h;
    this._init = function (b) {
        var k = s_bMobile ? TEXT_HELP1_MOBILE : TEXT_HELP1_PC;
        c = new createjs.Text(k, "24px " + PRIMARY_FONT, "#000");
        c.textAlign = "center";
        c.lineWidth = 500;
        c.textBaseline = "alphabetic";
        c.outline = 4;
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT;
        a = new createjs.Text(k, "24px " + PRIMARY_FONT, "#fff");
        a.textAlign = "center";
        a.lineWidth = 500;
        a.textBaseline = "alphabetic";
        a.x = c.x;
        a.y = c.y;
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .7;
        e = new createjs.Container;
        h = e.on("mousedown", this.unload);
        e.addChild(f, c, a);
        b.addChild(e);
        m = new CArrow(CANVAS_WIDTH / 2 - 400, BALL_START_Y, e);
        m.setAngle(-25);
        m.animHelp(1E3);
        b = s_oSpriteLibrary.getSprite("ball");
        d = createBitmap(b);
        d.regX = b.width / 2;
        d.regY = b.height / 2;
        d.x = CANVAS_WIDTH / 2 - 400;
        d.y = BALL_START_Y;
        e.addChild(d);
        b = s_oSpriteLibrary.getSprite("help_touch");
        g = createBitmap(b);
        g.regX = .33 * b.width;
        g.regY = .1 * b.height;
        g.x = d.x;
        g.y = d.y + 20;
        e.addChild(g);
        this._helpCursorAnim(1E3)
    };
    this.unload = function () {
        createjs.Tween.removeTweens(g);
        b.removeChild(e);
        e.off("mousedown", h)
    };
    this._helpCursorAnim = function (a) {
        createjs.Tween.get(g).to({
            x: d.x - 150,
            y: d.y + 60
        }, a, createjs.Ease.cubicInOut).call(function () {
            createjs.Tween.get(g).to({
                x: d.x,
                y: d.y
            }, a, createjs.Ease.cubicInOut).call(function () {
                k._helpCursorAnim(a)
            })
        })
    };
    this._onExitHelp = function () {
        this.unload();
        s_oGame._onExitHelp()
    };
    var k = this;
    this._init(b)
}

function CCreditsPanel() {
    var b, a, c, e, f;
    this._init = function () {
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = 0;
        a.on("mousedown", function () {});
        s_oStage.addChild(a);
        (new createjs.Tween.get(a)).to({
            alpha: .7
        }, 500);
        c = new createjs.Container;
        s_oStage.addChild(c);
        var d = s_oSpriteLibrary.getSprite("msg_box"),
            g = createBitmap(d);
        g.regX = d.width / 2;
        g.regY = d.height / 2;
        c.addChild(g);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT + d.height / 2;
        b = c.y;
        (new createjs.Tween.get(c)).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.quartIn);
        g = new createjs.Text(TEXT_DEVELOPED, " 30px " + PRIMARY_FONT, "#ffffff");
        g.y = -d.height / 2 + 180;
        g.textAlign = "center";
        g.textBaseline = "middle";
        c.addChild(g);
        d = new createjs.Text("www.codethislab.com", " 30px " + PRIMARY_FONT, "#ffffff");
        d.y = 80;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 300;
        c.addChild(d);
        d = s_oSpriteLibrary.getSprite("ctl_logo");
        f = createBitmap(d);
        f.on("mousedown", this._onLogoButRelease);
        f.regX = d.width / 2;
        f.regY = d.height / 2;
        c.addChild(f);
        f.on("mouseover", this.changePointer,
            this);
        d = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(300, -195, d, c);
        e.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.changePointer = function (a) {
        !1 === s_bMobile && (a.target.cursor = "pointer")
    };
    this.unload = function () {
        e.setClickable(!1);
        (new createjs.Tween.get(a)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(c)).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(a);
            s_oStage.removeChild(c);
            e.unload()
        });
        a.off("mousedown", function () {});
        f.off("mousedown", this._onLogoButRelease)
    };
    this._onLogoButRelease = function () {
        // window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._onMoreGamesReleased = function () {
        // window.open("http://codecanyon.net/collections/5409142-games")
    };
    this._init()
}

function CAreYouSurePanel(b) {
    var a, c, e, f, d, g;
    this._init = function (b) {
        g = b;
        s_oGame.setPause(!0);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function () {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
        }, 500);
        d = new createjs.Container;
        s_oStage.addChild(d);
        b = s_oSpriteLibrary.getSprite("msg_box");
        var k = createBitmap(b);
        k.regX = b.width / 2;
        k.regY = b.height / 2;
        d.addChild(k);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT + b.height / 2;
        a =
            d.y;
        (new createjs.Tween.get(d)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        k = new createjs.Text(TEXT_ARE_SURE, "74px " + PRIMARY_FONT, "#000000");
        k.y = -b.height / 2 + 120;
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth = 400;
        k.outline = 5;
        d.addChild(k);
        b = new createjs.Text(TEXT_ARE_SURE, "74px " + PRIMARY_FONT, "#FFFFFF");
        b.y = k.y;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 400;
        d.addChild(b);
        c = new CGfxButton(260, 130, s_oSpriteLibrary.getSprite("but_yes_big"), d);
        c.addEventListener(ON_MOUSE_UP,
            this._onButYes, this);
        e = new CGfxButton(-260, 130, s_oSpriteLibrary.getSprite("but_no"), d);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        e.pulseAnimation()
    };
    this._onButYes = function () {
        e.setClickable(!1);
        c.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(d)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function () {
            m.unload();
            g()
        })
    };
    this._onButNo = function () {
        e.setClickable(!1);
        c.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(d)).to({
                y: a
            },
            400, createjs.Ease.backIn).call(function () {
            m.unload();
            s_oGame.setPause(!1)
        })
    };
    this.unload = function () {
        e.unload();
        c.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(d);
        f.off("mousedown", function () {})
    };
    var m = this;
    this._init(b)
}

function CEndPanel(b) {
    var a, c, e, f, d, g, m, h, k, u, l, p, q, n, t, x, v, z, y, A, r;
    this._init = function (b) {
        y = this;
        r = 0;
        l = new createjs.Shape;
        l.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        A = l.on("mousedown", function () {});
        a = createBitmap(b);
        b = a.getBounds();
        a.regX = b.width / 2;
        a.regY = b.height / 2;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        e = new createjs.Text("", " 33px " + PRIMARY_FONT, "#000");
        e.x = CANVAS_WIDTH / 2 + 106;
        e.y = CANVAS_HEIGHT / 2 - 180;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth =
            450;
        f = new createjs.Text("", " 33px " + PRIMARY_FONT, "#ffffff");
        f.x = CANVAS_WIDTH / 2 + 105;
        f.y = CANVAS_HEIGHT / 2 - 178;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = 450;
        d = new createjs.Text("", " 30px " + PRIMARY_FONT, "#000");
        d.x = CANVAS_WIDTH / 2 + 71;
        d.y = e.y + 130;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.lineWidth = 550;
        g = new createjs.Text("", " 30px " + PRIMARY_FONT, "#ffffff");
        g.x = CANVAS_WIDTH / 2 + 70;
        g.y = d.y - 2;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth = 550;
        t = new createjs.Text("0",
            " 30px " + PRIMARY_FONT, "#000");
        t.x = CANVAS_WIDTH / 2 + 181;
        t.y = e.y + 130;
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 550;
        x = new createjs.Text("0", " 30px " + PRIMARY_FONT, "#ffffff");
        x.x = CANVAS_WIDTH / 2 + 180;
        x.y = d.y - 2;
        x.textAlign = "center";
        x.textBaseline = "alphabetic";
        x.lineWidth = 550;
        v = new createjs.Text("", " 30px " + PRIMARY_FONT, "#000");
        v.x = CANVAS_WIDTH / 2 + 101;
        v.y = t.y + 130;
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.lineWidth = v;
        z = new createjs.Text("", " 30px " + PRIMARY_FONT, "#ffffff");
        z.x = CANVAS_WIDTH /
            2 + 100;
        z.y = v.y - 2;
        z.textAlign = "center";
        z.textBaseline = "alphabetic";
        z.lineWidth = 550;
        b = s_oSpriteLibrary.getSprite("panel_" + s_iIndexPlayer);
        b = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: 320,
                height: 430,
                regX: 160,
                regY: 215
            },
            animations: {
                lose: [0, 0, 0],
                win: [1, 1, 1],
                final_win: [2, 2, 2]
            }
        });
        p = createSprite(b, "win", 160, 215, 320, 430);
        p.stop();
        p.x = CANVAS_WIDTH / 2 - 240;
        p.y = CANVAS_HEIGHT / 2;
        b = s_oSpriteLibrary.getSprite("starbox");
        q = [];
        for (var k = 0; 3 > k; k++) q.push(createBitmap(b, b.width, b.height)), q[k].regX = b.width / 2, q[k].regY =
            b.height / 2, q[k].y = CANVAS_HEIGHT / 2;
        q[0].x = CANVAS_WIDTH / 2 + 20;
        q[1].x = CANVAS_WIDTH / 2 + 100;
        q[2].x = CANVAS_WIDTH / 2 + 180;
        c = new createjs.Container;
        c.alpha = 0;
        c.visible = !1;
        c.addChild(l, a, t, x, d, g, e, f, p, q[0], q[1], q[2], v, z)
    };
    this.onButNext = function () {
        s_oGame.unload();
        s_oLevelSettings.nextLevel();
        s_oMain.gotoGame();
        s_oStage.removeChild(c);
        $(s_oMain).trigger("share_event", m)
    };
    this.unload = function () {
        l.off("mousedown", A)
    };
    this._initListener = function () {
        k.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        h.addEventListener(ON_MOUSE_DOWN,
            this._onRestart, this)
    };
    this.show = function (a, b, l) {
        trace("shooooooooooooow");
        s_oGame.setPause(!0);
        v.text = TEXT_TOT_SCORE + " " + l;
        z.text = TEXT_TOT_SCORE + " " + l;
        l = s_oSpriteLibrary.getSprite("but_restart_big");
        h = new CGfxButton(CANVAS_WIDTH / 2 + 180, CANVAS_HEIGHT / 2 + 150, l, c);
        l = s_oSpriteLibrary.getSprite("but_home");
        k = new CGfxButton(CANVAS_WIDTH / 2 - 20, CANVAS_HEIGHT / 2 + 150, l, c);
        s_oStage.addChild(c);
        s_oLevelSettings.getCurrentLevel() < NUM_LEVELS && 0 === b && (h.setX(CANVAS_WIDTH / 2 + 100), k.setX(h.getX() - 120), l = s_oSpriteLibrary.getSprite("but_next_big"),
            u = new CGfxButton(CANVAS_WIDTH / 2 + 220, CANVAS_HEIGHT / 2 + 150, l, c), u.addEventListener(ON_MOUSE_DOWN, this.onButNext, this));
        0 === b ? playSound("applause") : playSound("game_over");
        m = a;
        0 === b ? (s_oLevelSettings.getCurrentLevel() === s_oLevelSettings.getNumLevel() - 1 ? (p.gotoAndStop("final_win"), e.text = TEXT_GAMEOVER_3, f.text = TEXT_GAMEOVER_3, f.lineHeight = 40, e.lineHeight = 40) : (p.gotoAndStop("win"), e.text = TEXT_GAMEOVER, f.text = TEXT_GAMEOVER), n = new CRollingTextController(x, t, m, 2500, EASE_CUBIC_OUT), n.addEventListener(ON_CONTROLLER_REMOVE,
            function () {
                n.unload();
                n = null
            }), n.addEventListener(ON_CONTROLLER_END, function () {}), n.addRollingListener(y.onCollectStar, y, [STAR_SCORE, 2 * STAR_SCORE, 3 * STAR_SCORE])) : (p.gotoAndStop("lose"), m = a = 0, e.text = TEXT_GAMEOVER_2, f.text = TEXT_GAMEOVER_2);
        d.text = TEXT_SCORE;
        g.text = TEXT_SCORE;
        c.visible = !0;
        var w = this;
        createjs.Tween.get(c).to({
            alpha: 1
        }, 500).call(function () {
            w._initListener()
        });
        
    };
    this.onCollectStar = function () {
        var a = s_oSpriteLibrary.getSprite("star"),
            b = createBitmap(a, a.width, a.height);
        b.regX =
            a.width / 2;
        b.regY = a.height / 2;
        b.x = q[r].x;
        b.y = q[r].y;
        b.scaleX = .1;
        b.scaleY = .1;
        c.addChild(b);
        (new createjs.Tween.get(b)).to({
            scaleX: 1,
            scaleY: 1
        }, 1200, createjs.Ease.backOut);
        r++
    };
    this._onExit = function () {
        $(s_oMain).trigger("share_event", m);
        c.off("mousedown", this._onExit);
        s_oStage.removeChild(c);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onRestart = function () {
        s_oStage.removeChild(c);
        var a = new createjs.Shape;
        a.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = 0;
        s_oStage.addChild(a);
        (new createjs.Tween.get(a)).to({
            alpha: 1
        }, 250).wait(200).call(function () {
            s_oGame.restartGame();
            s_oStage.addChildAt(a, s_oStage.numChildren);
            (new createjs.Tween.get(a)).to({
                alpha: 0
            }, 250)
        });
        $(s_oMain).trigger("share_event", m)
    };
    this._init(b);
    return this
}

function CEdgeModel(b, a, c, e) {
    var f = null,
        d = null,
        g = null,
        m = null,
        h = null;
    this._init = function (a, b, c, d) {
        this.set(a, b, c, d)
    };
    this.destroy = function () {
        h = m = g = d = f = null
    };
    this.render = function (a) {
        a.moveTo(f.x, f.y);
        a.lineTo(d.x, d.y)
    };
    this.toString = function (a) {
        trace(a + " " + f.x + " " + f.y + " " + d.x + " " + d.y)
    };
    this.add = function (a) {
        f.addV(a);
        d.addV(a)
    };
    this.set = function (a, b, c, e) {
        f = new CVector2;
        d = new CVector2;
        f.set(a, b);
        d.set(c, e);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.moveY = function (a) {
        f.add(0, a);
        d.add(0, a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.scale = function (a) {
        f.scalarProduct(a);
        d.scalarProduct(a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.calculateNormal = function () {
        h = null;
        h = new CVector2;
        h.setV(d);
        h.subtract(f);
        h.rot90CCW();
        h.normalize()
    };
    this.calculateCenter = function () {
        g = null;
        g = centerBetweenPointsV2(f, d);
        m = new CVector2;
        m.setV(h);
        m.scalarProduct(5);
        m.addV(g)
    };
    this.getPointA = function () {
        return f
    };
    this.m_pCenter = function () {
        return g
    };
    this.getPointB = function () {
        return d
    };
    this.getNormal = function () {
        return h
    };
    this.renderNormal = function (a) {
        a.moveTo(g.x, g.y);
        a.lineTo(m.x, m.y)
    };
    this.getLength = function () {
        return Math.sqrt(Math.pow(c - b, 2) + Math.pow(e - a, 2))
    };
    this._init(b, a, c, e);
    return this
}

function CEdgeViewer(b, a, c, e, f, d) {
    var g;
    this.init = function (a, b, c, d, e, f) {
        a = a > c || b > d ? b === d ? (new createjs.Graphics).beginFill("#000").drawRect(c, d, e, f) : (new createjs.Graphics).beginFill("#000").drawRect(c, d, f, e) : b === d ? (new createjs.Graphics).beginFill("#000").drawRect(a, b, e, f) : (new createjs.Graphics).beginFill("#000").drawRect(a, b, f, e);
        g = new createjs.Shape(a);
        g.y = -f / 2;
        s_oStage.addChild(g)
    };
    this.moveY = function (a) {
        g.y += a
    };
    this.init(b, a, c, e, f, d)
}

function CEdge(b, a, c, e, f, d) {
    var g, m;
    this.init = function (a, b, c, e, f) {
        g = new CEdgeModel(a, b, c, e);
        var k = g.getLength();
        d && (m = new CEdgeViewer(a, b, c, e, k, f))
    };
    this.getModel = function () {
        return g
    };
    this.moveY = function (a) {
        d && m.moveY(a);
        g.moveY(a)
    };
    this.init(b, a, c, e, f)
}

function CVector2(b, a) {
    var c, e;
    this._init = function (a, b) {
        c = a;
        e = b
    };
    this.add = function (a, b) {
        c += a;
        e += b
    };
    this.addV = function (a) {
        c += a.getX();
        e += a.getY()
    };
    this.scalarDivision = function (a) {
        c /= a;
        e /= a
    };
    this.subtract = function (a) {
        c -= a.getX();
        e -= a.getY()
    };
    this.scalarProduct = function (a) {
        c *= a;
        e *= a
    };
    this.invert = function () {
        c *= -1;
        e *= -1
    };
    this.dotProduct = function (a) {
        return c * a.getX() + e * a.getY()
    };
    this.set = function (a, b) {
        c = a;
        e = b
    };
    this.setV = function (a) {
        c = a.getX();
        e = a.getY()
    };
    this.length = function () {
        return Math.sqrt(c * c + e * e)
    };
    this.length2 = function () {
        return c * c + e * e
    };
    this.normalize = function () {
        var a = this.length();
        0 < a && (c /= a, e /= a)
    };
    this.angleBetweenVectors = function (a) {
        a = Math.acos(this.dotProduct(a) / (this.length() * a.length()));
        return !0 === isNaN(a) ? 0 : a
    };
    this.getNormalize = function (a) {
        this.length();
        a.set(c, e);
        a.normalize()
    };
    this.rot90CCW = function () {
        var a = c;
        c = -e;
        e = a
    };
    this.rot90CW = function () {
        var a = c;
        c = e;
        e = -a
    };
    this.getRotCCW = function (a) {
        a.set(c, e);
        a.rot90CCW()
    };
    this.getRotCW = function (a) {
        a.set(c, e);
        a.rot90CW()
    };
    this.ceil = function () {
        c =
            Math.ceil(c);
        e = Math.ceil(e)
    };
    this.round = function () {
        c = Math.round(c);
        e = Math.round(e)
    };
    this.toString = function () {
        return "Vector2: " + c + ", " + e
    };
    this.print = function () {
        trace("Vector2: " + c + ", " + e + "")
    };
    this.getX = function () {
        return c
    };
    this.getY = function () {
        return e
    };
    this.rotate = function (a) {
        var b = c,
            f = e;
        c = b * Math.cos(a) + f * Math.sin(a);
        e = b * -Math.sin(a) + f * Math.cos(a)
    };
    this._init(b, a)
}

function CBall(b, a, c, e, f) {
    var d, g, m, h;
    this._init = function (a, b, c) {
        m = {
            x: a,
            y: b
        };
        d = createBitmap(c);
        d.x = a;
        d.y = b;
        d.regX = .5 * c.width;
        d.regY = .5 * c.height;
        h = c.width / 2;
        f.addChild(d);
        a = s_oSpriteLibrary.getSprite("arrow_ball");
        g = createBitmap(a);
        g.regX = a.width;
        g.y = s_iOffsetY;
        g.visible = !1;
        f.addChild(g)
    };
    this.unload = function () {
        f.removeChild(d)
    };
    this.setVisible = function (a) {
        d.visible = a
    };
    this.setPosition = function (a, b) {
        d.x = a;
        d.y = b
    };
    this.setAngle = function (a) {
        d.rotation = a
    };
    this.getRadius = function () {
        return h
    };
    this.getX =
        function () {
            return d.x
        };
    this.getY = function () {
        return d.y
    };
    this.scale = function (a) {
        d.scaleX = a;
        d.scaleY = a
    };
    this.getPhysics = function () {
        return c
    };
    this.getScale = function () {
        return d.scaleX
    };
    this.childIndex = function (a) {
        s_oStage.setChildIndex(d, a)
    };
    this.setAlpha = function (a) {
        d.alpha = a
    };
    this.animFadeOut = function () {
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, MS_ANIM_BALL_FADE).call(s_oGame.restartBallPos)
    };
    this.animFadeIn = function () {
        (new createjs.Tween.get(d)).to({
            alpha: 1
        }, MS_ANIM_BALL_FADE).call(function () {
            s_oGame.setBooleanLaunch(!1)
        })
    };
    this.arrowUpdate = function (a) {
        a.y < s_iOffsetY ? (g.visible = !0, g.y = s_iOffsetY, g.x = a.x) : g.visible = !1
    };
    this.getStartPos = function () {
        return m
    };
    this.update = function () {
        var a = s_oPhysicsController.getElementPosition(c);
        this.setPosition(a.x, a.y);
        this.setAngle(a.angle);
        this.arrowUpdate(a)
    };
    this._init(b, a, e)
}

function CLevelSettings(b) {
    var a, c;
    this.init = function (b) {
        c = 0;
        a = b;
        NUM_LEVELS = Object.keys(a).length;
        s_oLevelSettings = this
    };
    this.loadLevel = function (b) {
        c = b;
        OBSTACLES_INFO = a[b].obstacles;
        TEAMMATES_INFO = a[b].teammates;
        STARS_INFO = [a[b].star_0, a[b].star_1, a[b].star_2]
    };
    this.nextLevel = function () {
        c < a.length && (c++, this.loadLevel(c))
    };
    this.getNextLevel = function () {
        return c < a.length ? c + 2 : c + 1
    };
    this.getCurrentLevel = function () {
        return c
    };
    this.getNumLevel = function () {
        return a.length
    };
    this.deleteSaveData = function () {
        var a =
            s_oSpriteLibrary.getSprite("msg_box"),
            b = new createjs.Container,
            c = new createBitmap(a, a.width, a.height);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        a = new createjs.Text(TEXT_DELETE_SAVE, " 40px " + PRIMARY_FONT, "#FFFFFF");
        a.y = -180;
        a.textAlign = "center";
        a.lineWidth = 700;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.alpha = 0;
        var g = new createjs.Shape;
        g.graphics.beginFill("#000000").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .5;
        g.on("mousedown", function () {}, this);
        s_oStage.addChild(b);
        b.addChild(g,
            c, a);
        c = new CGfxButton(-100, 110, s_oSpriteLibrary.getSprite("but_yes"), b);
        a = new CGfxButton(100, 110, s_oSpriteLibrary.getSprite("but_exit"), b);
        a.pulseAnimation();
        a.addEventListener(ON_MOUSE_UP, function () {
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function () {
                s_oStage.removeChild(b)
            })
        }, this);
        c.addEventListener(ON_MOUSE_UP, function () {
            clearAllItem();
            s_oMain.loadUserData();
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function () {
                s_oStage.removeChild(b)
            })
        }, this);
        (new createjs.Tween.get(b)).to({
                alpha: 1
            },
            500)
    };
    this.init(b)
}
s_oLevelSettings = null;

function CLevelBut(b, a, c, e, f, d, g) {
    var m, h, k, u = [],
        l = [],
        p, q, n, t, x, v;
    this._init = function (a, b, c, d, e, f) {
        h = [];
        k = [];
        n = new createjs.Container;
        z.addChild(n);
        var g = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = f;
        q = createSprite(g, "state_" + m, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        q.mouseEnabled = f;
        q.x = a;
        q.y = b;
        q.stop();
        !s_bMobile && m && (n.cursor = "pointer");
        n.addChild(q);
        u.push(q);
        p = new createjs.Text(c,
            "50px " + PRIMARY_FONT, "#ff6c00");
        p.x = a;
        p.y = b;
        p.textAlign = "center";
        p.textBaseline = "middle";
        p.lineWidth = 200;
        v = [];
        for (c = 0; 3 > c; c++) d = e && e > c ? s_oSpriteLibrary.getSprite("star") : s_oSpriteLibrary.getSprite("starbox"), v.push(createBitmap(d, d.width, d.height)), v[c].regX = d.width / 2, v[c].regY = d.height / 2, v[c].scaleX = .7, v[c].scaleY = v[c].scaleX, n.addChild(v[c]);
        v[0].x = a - 35;
        v[0].y = b - 45;
        v[1].x = a;
        v[1].y = b - 60;
        v[2].x = a + 35;
        v[2].y = b - 45;
        n.addChild(p);
        f || (p.color = "#404040");
        this._initListener()
    };
    this.unload = function () {
        n.off("mousedown",
            t);
        n.off("pressup", x);
        n.removeChild(q)
    };
    this._initListener = function () {
        t = n.on("mousedown", this.buttonDown);
        x = n.on("pressup", this.buttonRelease)
    };
    this.viewBut = function (a) {
        n.addChild(a)
    };
    this.addEventListener = function (a, b, c) {
        h[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function (a, b, c, d) {
        h[a] = b;
        k[a] = c;
        l = d
    };
    this.ifClickable = function () {
        return !0 === n.mouseEnabled ? 1 : 0
    };
    this.setActive = function (a, b) {
        m = b;
        u[a].gotoAndStop("state_" + m);
        u[a].mouseEnabled = !0;
        p.color = m ? "#69b8d5" : "#b4b4b4"
    };
    this.buttonRelease = function () {
        m &&
            (playSound("click", 1, 0), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], l))
    };
    this.buttonDown = function () {
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], l)
    };
    this.setPosition = function (a, b) {
        n.x = a;
        n.y = b
    };
    this.setVisible = function (a) {
        n.visible = a
    };
    var z = g;
    this._init(b, a, c, e, f, d, g)
}

function CLevelMenu() {
    var b, a, c, e, f, d, g, m, h, k, u, l, p, q, n, t = null,
        x = null,
        v, z, y, A = null,
        r = null;
    this._init = function () {
        var w = new createjs.Shape;
        w.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        w.alpha = .7;
        h = 0;
        z = new createjs.Container;
        s_oStage.addChild(z);
        var u = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        z.addChild(u);
        z.addChild(w);
        g = CANVAS_WIDTH / 2;
        m = 18;
        v = new createjs.Text(TEXT_SELECT_LEVEL, "60px " + PRIMARY_FONT, "#fff");
        v.x = g;
        v.textAlign = "center";
        s_oStage.addChild(v);
        w = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - w.width / 2 - 10;
        d = w.height / 2 + 10;
        q = new CGfxButton(f, d, w, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = w.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c = q.getX() - w.width - 10, e = w.height / 2 + 10, n = new CToggle(c, e, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        w = window.document;
        u = w.documentElement;
        A = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        r = w.exitFullscreen ||
            w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && !1 === inIframe() && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), b = w.width / 4 + 10, a = w.height / 2 + 10, y = new CToggle(b, a, w, s_bFullscreen, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        l = [];
        w = Math.floor((CANVAS_WIDTH - 2 * EDGEBOARD_X) / NUM_COLS_PAGE_LEVEL) / 2 - 15;
        for (var B = u = 0; B < NUM_COLS_PAGE_LEVEL; B++) l.push(u), u += 2 * w;
        p = [];
        this._createNewLevelPage(0, s_oLevelSettings.getNumLevel());
        if (1 < p.length) {
            for (w = 1; w < p.length; w++) p[w].visible = !1;
            t = new CGfxButton(CANVAS_WIDTH / 2 + 300, CANVAS_HEIGHT / 2 + 250, s_oSpriteLibrary.getSprite("arrow_select_level"), s_oStage);
            t.getButtonImage().rotation = 90;
            t.addEventListener(ON_MOUSE_UP, this._onRight, this);
            x = new CGfxButton(CANVAS_WIDTH / 2 - 300, CANVAS_HEIGHT / 2 + 250, s_oSpriteLibrary.getSprite("arrow_select_level"), s_oStage);
            x.getButtonImage().rotation = -90;
            x.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos()
    };
    this.unload = function () {
        for (var a =
                0; a < u.length; a++) u[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.unload();
        A && !1 === inIframe() && y.unload();
        q.unload();
        null !== x && (x.unload(), t.unload());
        s_oStage.removeAllChildren();
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function () {
        v.y = m + s_iOffsetY;
        q.setPosition(f - s_iOffsetX, d + s_iOffsetY);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(c - s_iOffsetX, s_iOffsetY + e);
        A && !1 === inIframe() && y.setPosition(b + s_iOffsetX, a + s_iOffsetY)
    };
    this._checkBoundLimits = function () {
        for (var a = s_oSpriteLibrary.getSprite("but_level"),
                b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * k, d = 0; b < c;) b += a.height + 20, d++;
        NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;) c += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function (a, b) {
        var c = new createjs.Container;
        z.addChild(c);
        p.push(c);
        u = [];
        for (var d = 0, e = 0, f = 1, g = !1, h = s_oSpriteLibrary.getSprite("but_level"), k = a; k < b; k++) {
            var m = new CLevelBut(l[d] + h.width / 4, e + h.height / 2 + 30, k + 1, h, s_aStars[k],
                k + 1 > s_iLastLevel ? !1 : !0, c);
            m.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, k);
            u.push(m);
            d++;
            if (d === l.length && k < b - 1 && (d = 0, e += h.height + 50, f++, f > NUM_ROWS_PAGE_LEVEL)) {
                g = !0;
                break
            }
        }
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regX = c.getBounds().width / 2;
        c.regY = c.getBounds().height / 2;
        g && this._createNewLevelPage(k + 1, b)
    };
    this._onRight = function () {
        p[h].visible = !1;
        h++;
        h >= p.length && (h = 0);
        p[h].visible = !0
    };
    this._onLeft = function () {
        p[h].visible = !1;
        h--;
        0 > h && (h = p.length - 1);
        p[h].visible = !0
    };
    this._onButLevelRelease =
        function (a) {
            s_oLevelSettings.loadLevel(a);
            this.unload();
            s_oMain.gotoGame()
        };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function () {
        y.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? r.call(window.document) : A.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function () {
        this.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CMsgBox(b, a) {
    var c, e, f;
    this._init = function (a) {
        f = new createjs.Container;
        g.addChild(f);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .7;
        a.on("click", function () {});
        f.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var b = createBitmap(a);
        b.x = .5 * CANVAS_WIDTH;
        b.y = .5 * CANVAS_HEIGHT;
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        f.addChild(b);
        c = new createjs.Text(TEXT_ERR_LS, "28px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = 220;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 600;
        f.addChild(c);
        e = new CGfxButton(CANVAS_WIDTH / 2, 550, s_oSpriteLibrary.getSprite("but_yes_big"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function () {
        d.unload()
    };
    this.unload = function () {
        e.unload();
        g.removeChild(f)
    };
    var d = this;
    var g = a;
    this._init(b)
};