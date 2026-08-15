const enc = new TextEncoder();
const bytes = (n:number) => { const a = new Uint8Array(n); crypto.getRandomValues(a); return Array.from(a).map(x=>x.toString(16).padStart(2,'0')).join(''); };
export const normalizeAnswer = (value:string) => value.trim().toLocaleLowerCase().replace(/\s+/g,' ');
export async function hashSecret(value:string,salt=bytes(16)) { const data = enc.encode(`${salt}:${normalizeAnswer(value)}`); const digest = await crypto.subtle.digest('SHA-256',data); return {hash:Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,'0')).join(''),salt}; }
export async function matchesSecret(value:string,hash:string,salt:string) { return (await hashSecret(value,salt)).hash === hash; }
