
proc run11_1(): string =
    const input = staticRead"../input/day11.txt"

    return "TODO"


when not defined(js):
    echo run11_1()
else:
    proc js_run11_1(): cstring {.exportc.} =
        return cstring(run11_1())
