# docu.md Markdown Viewer

พรีวิว Markdown พร้อมไดอะแกรม สูตร ธีม และส่งออก DOCX/PDF/HTML แบบประมวลผลในเครื่อง

README นี้อธิบาย docu.md เป็นภาษาไทยในฐานะเอกสารสำหรับผู้ใช้ จึงให้รายละเอียดได้มากกว่าคำอธิบายสั้นในร้านส่วนขยาย

docu.md Markdown Viewer เป็นส่วนขยายสำหรับพรีวิว Markdown และส่งออกเอกสาร เปิดไฟล์ Markdown จากเครื่องหรือจากเว็บในเบราว์เซอร์ อ่านเป็นเอกสารที่จัดรูปแบบเรียบร้อย แล้วส่งออกเมื่อคุณต้องการไฟล์สำหรับเพื่อนร่วมงาน ลูกค้า เพื่อนร่วมชั้น หรือผู้ตรวจทาน

Markdown เหมาะกับการร่างงานอย่างรวดเร็ว การควบคุมเวอร์ชัน บันทึกเชิงเทคนิค เอกสารโครงการ และเนื้อหาที่สร้างด้วย AI แต่ขั้นตอนส่งต่องานมักทำให้เสียเวลา: ไดอะแกรมกลายเป็นภาพหน้าจอ สูตรแก้ไขต่อไม่ได้ บล็อกโค้ดต้องจัดรูปแบบใหม่ และตารางต้องเก็บรายละเอียดด้วยมือ docu.md เก็บต้นฉบับ Markdown ไว้ พร้อมให้หน้าสำหรับอ่านและส่งออกที่พร้อมใช้งาน

ฟีเจอร์หลัก:

- มุมมองอ่าน Markdown ที่สะอาดสำหรับไฟล์ในเครื่องและ URL เว็บที่รองรับ
- ส่งออก DOCX สำหรับเอกสาร Word ที่แก้ไขต่อได้
- ส่งออก PDF และ HTML แบบไฟล์เดี่ยวเมื่อแพลตฟอร์มรองรับ
- สูตรคณิตศาสตร์ที่แก้ไขได้ในผลลัพธ์ Word
- ไฮไลต์ไวยากรณ์สำหรับบล็อกโค้ด
- ธีมเอกสารสำหรับรายงานธุรกิจ งานเขียนวิชาการ บันทึกเชิงเทคนิค เลย์เอาต์สำหรับอ่าน และตัวพิมพ์ภาษาจีน
- การเรนเดอร์และแคชอัจฉริยะสำหรับเอกสารขนาดใหญ่
- การประมวลผลในเครื่องสำหรับการพรีวิวและส่งออกตามปกติ

เนื้อหาที่รองรับรวมถึง Markdown มาตรฐาน ตารางและรายการงานแบบ GitHub รูปภาพ โค้ดที่ไฮไลต์ สูตรคณิตศาสตร์ เนื้อหา SVG ตาราง HTML ที่ซับซ้อน และไดอะแกรมหรือกราฟที่เขียนด้วยรูปแบบข้อความทั่วไป เช่น PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic และ Graphviz

docu.md เหมาะกับเอกสารเทคนิค บันทึกการออกแบบ ร่างงานวิจัย รายงานประจำสัปดาห์ ฐานความรู้ ไฟล์ README และการเขียนที่มี AI ช่วย เปิด Markdown ตรวจผลลัพธ์ เลือกธีม แล้วส่งออกรูปแบบที่เหมาะกับการส่งต่องาน

หากต้องการเปิดไฟล์ในเครื่อง ให้เปิดสิทธิ์เข้าถึง file URL ในหน้ารายละเอียดส่วนขยาย จากนั้นคุณสามารถเปิดไฟล์ `.md` จากอุปกรณ์ ลากไฟล์เข้าเบราว์เซอร์ หรือใช้ขั้นตอนเปิดไฟล์ของเบราว์เซอร์ได้ Markdown ออนไลน์จะแสดงผลจาก URL ที่รองรับ

ความเป็นส่วนตัวเป็นส่วนหนึ่งของเวิร์กโฟลว์ การพรีวิวและส่งออกตามปกติประมวลผลในเครื่องภายในส่วนขยาย ไฟล์ Markdown ของคุณไม่จำเป็นต้องอัปโหลดไปยังบริการเรนเดอร์ระยะไกล

## การติดตั้ง

เลือกแพลตฟอร์มที่เหมาะกับเวิร์กโฟลว์ของคุณ:

- **Chrome / Chromium:** https://chromewebstore.google.com/detail/markdown-viewer/jekhhoflgcfoikceikgeenibinpojaoi
- **Microsoft Edge:** https://microsoftedge.microsoft.com/addons/detail/documd-markdown-viewer/iphmkjlbnogmhofmmcahdhodiilokfca
- **Firefox:** https://addons.mozilla.org/firefox/addon/markdown-viewer-extension/
- **Obsidian:** https://community.obsidian.md/plugins/markdown-viewer-extension
- **VS Code:** https://marketplace.visualstudio.com/items?itemName=xicilion.markdown-viewer-extension · https://open-vsx.org/extension/xicilion/markdown-viewer-extension
- **แอปมือถือ:** https://github.com/markdown-viewer/docs/blob/main/platforms/mobile.md

หากต้องการเปิดไฟล์ในเครื่องผ่านเบราว์เซอร์ ให้เปิดสิทธิ์เข้าถึง file URL ในการตั้งค่าส่วนขยาย

## แพลตฟอร์ม

อ่านเพิ่มเติมเกี่ยวกับการติดตั้ง ฟีเจอร์ แพลตฟอร์ม และความเป็นส่วนตัว:

- https://github.com/markdown-viewer/docs/blob/main/platforms/platform-comparison.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/chrome.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/edge.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/firefox.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/obsidian.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/vscode.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/mobile.md

## ความเป็นส่วนตัว

หากต้องการเปิดไฟล์ในเครื่อง ให้เปิดสิทธิ์เข้าถึง file URL ในหน้ารายละเอียดส่วนขยาย จากนั้นคุณสามารถเปิดไฟล์ `.md` จากอุปกรณ์ ลากไฟล์เข้าเบราว์เซอร์ หรือใช้ขั้นตอนเปิดไฟล์ของเบราว์เซอร์ได้ Markdown ออนไลน์จะแสดงผลจาก URL ที่รองรับ

## เอกสารและการสนับสนุน

อ่านเพิ่มเติมเกี่ยวกับการติดตั้ง ฟีเจอร์ แพลตฟอร์ม และความเป็นส่วนตัว:

- https://github.com/markdown-viewer/docs/blob/main/getting-started/installation.md
- https://github.com/markdown-viewer/docs/blob/main/features/README.md
- https://github.com/markdown-viewer/docs/blob/main/platforms/platform-comparison.md
- https://github.com/markdown-viewer/docs/blob/main/faq.md
- https://docu.md/privacy

ใช้ GitHub สำหรับปัญหาและข้อเสนอแนะ

- https://github.com/markdown-viewer/markdown-viewer-extension/issues

## ซอร์สโค้ด

- https://github.com/markdown-viewer/markdown-viewer-extension
