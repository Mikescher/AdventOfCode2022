
proc run21_2(): string =
    const input = staticRead"../input/day21.txt"

    return "TODO"

when not defined(js):
    echo run21_2()
else:
    proc js_run21_2(): cstring {.exportc.} =
        return cstring(run21_2())
