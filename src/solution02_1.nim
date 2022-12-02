import std/strutils

proc get_rps_winner(m1: int, m2: int): int =
    if m1 == 0 and m2 == 0:
        return 0
    if m1 == 0 and m2 == 1:
        return 2
    if m1 == 0 and m2 == 2:
        return 1

    if m1 == 1 and m2 == 0:
        return 1
    if m1 == 1 and m2 == 1:
        return 0
    if m1 == 1 and m2 == 2:
        return 2

    if m1 == 2 and m2 == 0:
        return 2
    if m1 == 2 and m2 == 1:
        return 1
    if m1 == 2 and m2 == 2:
        return 0

    return -1
    
proc run02_1(): string =
    const input = staticRead"../input/day02.txt"

    var score = 0

    for line in splitLines(input):
        if line == "":
            continue

        let move_elve = int(line[0]) - int('A')
        let move_me   = int(line[2]) - int('X')

        let delta1 = (move_me + 1)
        var delta2 = 0

        let winner = get_rps_winner(move_elve, move_me)

        if winner == 0:
            delta2 = 3 # draw
        elif winner == 1:
            delta2 = 0 # elve win
        elif winner == 2:
            delta2 = 6 # me win

        # echo line , "  ->  " , move_elve, "|", move_me, " -> ", winner, " || ", score, " + ", delta1, " + ", delta2

        score += delta1
        score += delta2

    return intToStr(score)

when not defined(js):
    echo run02_1()
else:
    proc js_run02_1(): cstring {.exportc.} =
        return cstring(run02_1())
