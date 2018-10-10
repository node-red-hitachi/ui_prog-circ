node-red-contrib-ui_prog-circ
=============================

Node-RED UI widget node for notifying progresss of processing with animated circle


Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-ui_prog-circ


Example
-------

```
[{"id":"49f80f4f.635a6","type":"tab","label":"Flow 2","disabled":false,"info":""},{"id":"2b98b47b.c13bbc","type":"ui_prog_circ","z":"49f80f4f.635a6","group":"85feff98.97943","name":"","order":0,"width":"2","height":"2","diameter":"50","x":320,"y":100,"wires":[]},{"id":"a1ecd8b6.db7538","type":"inject","z":"49f80f4f.635a6","name":"STOP","topic":"","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":130,"y":60,"wires":[["2b98b47b.c13bbc"]]},{"id":"e620adc7.3ff5f","type":"inject","z":"49f80f4f.635a6","name":"RESUME","topic":"","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":140,"wires":[["2b98b47b.c13bbc"]]},{"id":"85feff98.97943","type":"ui_group","z":"","name":"Default","tab":"68fd91f3.8dba1","disp":true,"width":"6","collapse":false},{"id":"68fd91f3.8dba1","type":"ui_tab","z":"","name":"Sample","icon":"dashboard","order":1}]
```
