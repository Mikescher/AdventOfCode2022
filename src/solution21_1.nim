
proc run21_1(): string =
    const input = staticRead"../input/day21.txt"

    return "TODO"


when not defined(js):
    echo run21_1()
else:
    proc js_run21_1(): cstring {.exportc.} =
        return cstring(run21_1())
