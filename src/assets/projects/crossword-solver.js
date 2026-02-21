export const crosswordSolver = {
  id: "crossword-solver",
  slug: "crossword_solver",
  category: "design",
  thumbnail: "/projects/crossword_solver/thumbnail.png",
  gitrepo: "https://github.com/NsamaX/Crossword-Solver",
  demolink: null,
  iconkey: [
    "java",
  ],
  images: [
    "/projects/crossword_solver/sample.png",
  ],
  translations: {
    en: {
      title: "Crossword Solver",
      short: "A Java program that solves crossword-style puzzles with word paths and gravity rules.",
      description: "Crossword Solver is a Java-based project that implements an algorithm to calculate possible answers for the crossword-style puzzle game by [Ludobros] ({App Store[https://apps.apple.com/th/developer/ludobros/id871218554]}). The system works by exploring valid words that can be formed from a crossword grid based on target word lengths and the available letters. Each letter in the grid is represented as a node connected to its 8 neighbors, allowing traversal in all directions.\n\nThe solver applies the gravity rule used in the game, where letters fall down to fill empty spaces after a word is removed. It leverages backtracking to try different paths and efficiently explore all possible word combinations that satisfy the given constraints. The final output is a set of complete solutions, each showing the sequence of words formed step by step.\n\nThis project demonstrates how algorithms, graph traversal, and recursive backtracking can be applied to solve puzzle games with real-world mechanics like adjacency and gravity.",
      feature: {
        "Word Search Algorithm": "Finds valid words in the grid using adjacency rules across 8 directions.",
        "Graph Representation": "Represents each letter as a node with connections to neighbors.",
        "Gravity Rule": "Implements falling letters after words are used, simulating the game mechanic.",
        Backtracking: "Explores all potential paths to find complete solutions efficiently.",
        "Caching Optimization": "Stores possible words per letter set to reduce redundant calculations.",
        "Solution Deduplication": "Ensures unique sets of words by tracking word signatures.",
      },
      stack: {
        Java: "Core programming language used to implement the system.",
        Backtracking: "Algorithmic approach to explore multiple paths recursively.",
        "Graph Theory": "Used to represent the crossword grid and connections between letters.",
        "File I/O": "Reads dictionary word lists and writes solution outputs to files.",
      },
    },
    th: {
      title: "Crossword Solver",
      short: "โปรแกรม Java สำหรับช่วยแก้ปริศนาแนว crossword ที่มีเส้นทางคำและกติกาแรงโน้มถ่วง",
      description: "Crossword Solver เป็นโปรเจคภาษา Java ที่พัฒนาอัลกอริทึมเพื่อช่วยคำนวณคำตอบที่เป็นไปได้สำหรับเกมปริศนาแนว crossword ของ [Ludobros] ({App Store[https://apps.apple.com/th/developer/ludobros/id871218554]}). ระบบจะค้นหาคำที่สามารถสร้างได้จากตารางตัวอักษร โดยพิจารณาความยาวคำเป้าหมายและชุดตัวอักษรที่มีอยู่ แต่ละตัวอักษรจะถูกแทนเป็นโหนดที่เชื่อมกับเพื่อนบ้านทั้ง 8 ทิศ ทำให้สามารถเดินทางได้รอบทิศทาง\n\nตัวแก้ปริศนายังจำลองกติกาแรงโน้มถ่วงของเกม เมื่อใช้คำหนึ่งไปแล้ว ตัวอักษรที่อยู่ด้านบนจะตกลงมาแทนที่ช่องว่าง จากนั้นใช้วิธี backtracking สำรวจเส้นทางต่าง ๆ อย่างเป็นระบบ เพื่อหาชุดคำตอบที่เป็นไปได้ทั้งหมดตามเงื่อนไขที่กำหนด ผลลัพธ์สุดท้ายคือชุดคำตอบหลายลำดับ ที่แสดงขั้นตอนการสร้างคำทีละคำอย่างชัดเจน\n\nโปรเจคนี้แสดงให้เห็นการประยุกต์ใช้อัลกอริทึม การเดินกราฟ และการเรียกซ้ำแบบ backtracking เพื่อแก้ปริศนาเกมที่มีกติกาใกล้เคียงโลกจริง เช่น การอยู่ติดกันของตัวอักษรและกติกาแรงโน้มถ่วง",
      feature: {
        อัลกอริทึมค้นหาคำ: "ค้นหาคำที่ถูกต้องจากตารางตัวอักษร โดยใช้กติกาการติดกันของตัวอักษรทั้ง 8 ทิศ",
        การแทนกริดเป็นกราฟ: "แทนตัวอักษรแต่ละตัวเป็นโหนด และเชื่อมโยงกับเพื่อนบ้าน เพื่อให้เดินกราฟได้สะดวก",
        กติกาแรงโน้มถ่วง: "จำลองการตกลงมาของตัวอักษรหลังจากใช้คำหนึ่งไปแล้ว ให้ใกล้เคียงกลไกในเกมจริง",
        Backtracking: "ใช้ backtracking ในการสำรวจเส้นทางที่เป็นไปได้ทุกแบบ เพื่อหาคำตอบที่ครบถ้วน",
        การแคชผลลัพธ์: "เก็บชุดตัวอักษรที่เคยคำนวณไปแล้ว เพื่อลดการประมวลผลซ้ำ",
        การลบชุดคำตอบซ้ำ: "ตรวจสอบลายเซ็นของคำแต่ละชุด เพื่อให้ผลลัพธ์สุดท้ายไม่มีคำตอบซ้ำซ้อนกัน",
      },
      stack: {
        Java: "ภาษาโปรแกรมหลักที่ใช้ในการเขียนอัลกอริทึมและโครงสร้างข้อมูล",
        Backtracking: "แนวทางอัลกอริทึมที่ใช้สำรวจเส้นทางคำตอบหลายแบบด้วยการเรียกซ้ำ",
        "Graph Theory": "แนวคิดกราฟที่ใช้แทนโครงสร้างตารางตัวอักษรและความสัมพันธ์ระหว่างช่อง",
        "File I/O": "อ่านไฟล์พจนานุกรมและเขียนผลลัพธ์คำตอบออกเป็นไฟล์สำหรับวิเคราะห์ต่อ",
      },
    },
  },
};
