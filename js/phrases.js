function random(n) {
    return Math.floor(Math.random() * n);
}

function choice(x) {
    return x[random(x.length)];
}

function generate_one(words1, words2, alliterate) {
    while (1) {
        word1 = choice(words1);
        word2 = choice(words2);
        if (alliterate && word1[0] != word2[0]) {
            continue;
        }
        return "<p>" + word1 + " " + word2 + "</p>";
    }
}

function generate(words1, words2, count, alliterate) {
    result = "";
    for (var i = 0; i < count; i++) {
        result += generate_one(words1, words2, alliterate);
    }
    return result;
}

function update() {
    var count = 10;
    $("#a_adjective_noun").html(generate(ADJECTIVES, NOUNS, count, true));
    $("#a_noun_noun").html(generate(NOUNS, NOUNS, count, true));
    $("#a_verb_noun").html(generate(VERBS, NOUNS, count, true));
    $("#adjective_noun").html(generate(ADJECTIVES, NOUNS, count, false));
    $("#noun_noun").html(generate(NOUNS, NOUNS, count, false));
    $("#verb_noun").html(generate(VERBS, NOUNS, count, false));
}

$(function() {
    update();
});
