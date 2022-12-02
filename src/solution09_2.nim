
proc run09_2(): string =
    const input = staticRead"../input/day09.txt"

    return "TODO"

when not defined(js):
    echo run09_2()
else:
    proc js_run09_2(): cstring {.exportc.} =
        return cstring(run09_2())
