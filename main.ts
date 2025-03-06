import { Queue } from 'queue-typescript';
var fs = require('fs');
   export function parse(map_path: string){
        let m = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
        const asMap: string[][] = [];
        for (let i = 0; i < m.length; i++) {
            let line: string[] = [];
            for (let j = 0; j < m[i].length; j++) {
                line.push(m[i][j]);
            } asMap.push(line)

        } //console.log(asMap);
            //let start= [];
            const maze_nb: number[][] = [];
        for (let i = 0; i < asMap.length; i++) {
            let line :number [] = [];
            for (let j = 0; j < asMap[i].length; j++) {
                if (asMap[i][j] === 'o') {
                    line.push(-1)
                }
                if (asMap[i][j] === '.') {
                    line.push(0)
                }
                if (asMap[i][j] === 'E') {
                    line.push(-2)
                }
                if (asMap[i][j] === 'S') {

                    line.push(-3)
                   // start= asMap[i][j]

                } //console.log(line);
            }
            maze_nb.push(line);
        }
        return maze_nb;
    }
    let maze = parse(process.argv[2]);
   


    let visited: boolean[][] = []; 
for (let i = 0; i < maze.length; i++) {
    let line : boolean [] = [];
    for (let j = 0; j < maze[i].length; j++) {
        line.push(false)
    } visited.push(line)
   
}
 

export function start_index(array: number[][]) :[number, number]{

    let x_start = 0
    let y_start = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === -3) {
                x_start = i
                y_start = j
            }
        }
    } return [x_start, y_start]
}

export function end_index(array: number[][]):[number, number] {

    let x_end = 0
    let y_end = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === -2) {
                x_end = i
                y_end = j
            }
        }
    } return [x_end, y_end]
}


const move: [number, number][] = [[-1, 0], [0, -1], [1, 0], [0, 1]];

// Retrouver la distance minimum entre le point (i, j) et la destination (x, y)
export function find_path(carte: number[][], start_x: number, start_y: number, end_x: number, end_y:number ):[number, Record<string, [number, number]>]{
    
    const queue = new Queue<[number, number, number]>();
    visited[start_x][start_y] = true;
    queue.enqueue([start_x, start_y, 0]);
    let min_dist= Number.MAX_SAFE_INTEGER;

    const prev:Record<string, [number, number]> = {};

    while (queue.length > 0) {
        const [x, y, dist] = queue.dequeue()!;
        //console.log(x, y)
        
        if ((x === end_x && y === end_y))  {
            min_dist = dist;
            break;
        }
        //console.log(move)
        for (const [move_x, move_y] of move) {
            const neighbour_x = x + move_x;
            const neighbour_y = y + move_y;

            // Si le voisin est bien sur la carte
        
            if (0 <= neighbour_x && neighbour_x < carte.length && 0 <= neighbour_y && neighbour_y < carte[0].length) {
                // Si le voisin est accessible
                //console.log("qw")
                if (carte[neighbour_x][neighbour_y] === 0 || carte[neighbour_x][neighbour_y]===-2) {
                    // Si le voisin n'a pas encore été visité
                    if (!visited[neighbour_x][neighbour_y]) {
                        visited[neighbour_x][neighbour_y] = true;
                        queue.enqueue([neighbour_x, neighbour_y, dist + 1]);
                        //console.log(2, queue)
                        prev[`${neighbour_x}, ${neighbour_y}`] = [x,y];
                    }
                }
            }
        }
    }

    return [min_dist,  prev];
}
let start = (start_index(maze));
let end = (end_index(maze));

const [dist,prev] = find_path(maze, start[0], start[1], end[0], end[1]);

if (dist !== Number.MAX_SAFE_INTEGER) {
    console.log("Le chemin le plus court jusqu'à la destination a une longueur de", dist);

    console.log("Voici le chemin à parcourir :");
    console.log(end);
    let path= [];
       while (end.toString() !== start.toString()) {
        
        path.push(prev[`${end[0]}, ${end[1]}`]);
        end = prev[`${end[0]}, ${end[1]}`];
        //console.log(path)
    }
    path.forEach(element => {
        console.log(element)
    });

} else {
    console.log("La destination ne peut pas être atteinte");
}
