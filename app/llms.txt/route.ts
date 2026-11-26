import { PROJECTS, SKILLS, STATS } from '@/lib/content';

export const dynamic = 'force-static';

export function GET() {
  const work = PROJECTS.map(p => [
    `### ${p.title}`,
    p.summary,
    `- Problem: ${p.problem}`,
    `- Solution: ${p.solution}`,
    `- Result: ${p.result}`,
    `- Stack: ${p.tags.join(', ')}`,
  ].join('\n')).join('\n\n');

  const text = `# Vijuksama Hongthongdaeng

> Factory IT: support, servers and practical in-house software. Sole IT for a 300+ person factory at Nozomi Enterprise (Thailand). Making the complex simple.

${STATS.map(s => `- ${s.value} ${s.label}`).join('\n')}

Contact: vijuksama@gmail.com · GitHub: https://github.com/NsamaX
Resume: resume.html

## Work
${work}

## What I can do
- IT Support: Looking after computers and helping people work without interruptions.
- Server: Setting up and running servers so systems stay reliable.
- Developer: Building practical tools people use every day.
- Tools: ${SKILLS.map(s => s.label).join(', ')}

## Experience
- Nov 2025 – Present · IT Coordinator, Nozomi Enterprise (Thailand): Sole IT for a 300+ person factory, cutting total IT costs by 45,200฿/year.
- 2021 – 2025 · Silpakorn University: B.Sc. Information Technology — graduation project: an NFC card-tracking app.
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
