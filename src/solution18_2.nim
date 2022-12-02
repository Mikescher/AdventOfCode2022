
proc run18_2(): string =
    const input = staticRead"../input/day18.txt"

    return "TODO"

when not defined(js):
    echo run18_2()
else:
    proc js_run18_2(): cstring {.exportc.} =
        return cstring(run18_2())
