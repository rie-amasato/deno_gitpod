import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const server=serve({port: 8888});

let cnt=0;
for await (const req of server){
    cnt+=1
console.log(cnt)
    console.log("127.0.0.1:8888")
    req.respond({body: `<h1>がぉー、Deno!</h1><p>更新カウント: ${cnt}</p>`});
}
