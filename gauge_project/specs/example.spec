# Getting Started with Gauge

This is an example markdown specification file.
Every heading in this file is a scenario.
Every bulleted point is a step.

To execute this specification, use
	npm test

This is a context step that runs before every scenario
* Open todo application

## Display number of items

tags: CT000

* Add task "first task"
* Must display "1 item left"
* Add task "second task"
* Must display "2 items left"

