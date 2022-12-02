
proc run08_2(): string =
    const input = staticRead"../input/day08.txt"

    return "TODO"

when not defined(js):
    echo run08_2()
else:
    proc js_run08_2(): cstring {.exportc.} =
        return cstring(run08_2())
