class Graph {
  constructor() {
    this.no_of_vertices = 0;
    this.adjecencyList = {};
  }
  addVertex(value) {
    this.adjecencyList[value] = [];
    this.no_of_vertices++;
  }
  addEdge(value1, value2) {
    this.adjecencyList[value1].push(value2);
    this.adjecencyList[value2].push(value1);
  }
  showConnections() {
    for (let vertex of Object.keys(this.adjecencyList)) {
      console.log(vertex + '==>');
      for (let destination of this.adjecencyList[vertex]) {
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
