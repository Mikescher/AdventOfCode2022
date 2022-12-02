
proc run05_2(): string =
    const input = staticRead"../input/day05.txt"

    return "TODO"

when not defined(js):
    echo run05_2()
else:
    proc js_run05_2(): cstring {.exportc.} =
        return cstring(run05_2())
