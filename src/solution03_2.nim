
proc run03_2(): string =
    const input = staticRead"../input/day03.txt"

    return "TODO"

when not defined(js):
    echo run03_2()
else:
    proc js_run03_2(): cstring {.exportc.} =
        return cstring(run03_2())
