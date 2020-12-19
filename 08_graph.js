class Graph {
  constructor() {
    this.noOfVertices = 0;
    this.adjecentList = {};
  }

  addVertex(value) {
    this.adjecentList[value] = [];
    this.noOfVertices++;
  }

  addEdge(value1, value2) {
    this.adjecentList[value1].push(value2);
    this.adjecentList[value2].push(value1);
  }
  showConnections() {
    for (let vertex of Object.keys(this.adjecentList)) {
      console.log(vertex, "--->");
      for (let destination of this.adjecentList[vertex]) {
        console.log(destination);
      }
    }
  }
}

let my_graph = new Graph();

my_graph.addVertex(1);
my_graph.addVertex(2);
my_graph.addEdge(2, 1);
my_graph.showConnections();
console.log(my_graph);
