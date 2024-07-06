import fs from 'fs';
import path from 'path';

export async function GET (request){
    const filePath = path.join(process.cwd(), 'data', 'lifegame.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    return new Response(JSON.stringify(data));
} 