
proc run23_2(): string =
    return "TODO"

when not defined(js):
    echo run23_2()
else:
    proc js_run23_2(): cstring {.exportc.} =
        return cstring(run23_2())
