export default function generateDate(content: string) {
   return content.slice(0, 10).replaceAll('-', '.');
}
