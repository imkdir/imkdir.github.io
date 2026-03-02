---
name: "nihilo"
tagline: "tiny weight loss tool"
icon_url: "/images/apps/nihilo.png"
app_store_url: "https://apps.apple.com/us/app/nihilo/id6757951351"
status: "Active"
---

In October 2025, an idea occurred to me: “**Why not use Excel to track my meals, exercises, and weight everyday?**” In that month alone, I lost 8kg. It worked.

On reflection, I think the key was my instinct to avoid the pain of tracking every new meal or exercise. I stuck to routines, and that directly shaped my habits in real life. 

For example, my days used to begin with breakfast at McDonald's. Gradually, I realized how calorie-dense it was and how big of a bite it took out of my daily calorie deficit. I began making breakfast myself—it was lower in calories and more filling. I actually started looking forward to it before going to sleep.

I created a spreadsheet with columns for **Weight, TDEE, Calorie Burn, Calorie Intake, Calorie Deficit, Hydration, and Date**. The TDEE was a formula calculated based on my weight, age, and height. 

As my weight dropped, my TDEE dropped too, narrowing my calorie deficit window. That explained the weight loss plateau. But that's okay—once you see the data, you adapt.

Calorie Intake was a formula combining the meals I logged that day. The same applied to the Calories Out and Calorie Deficit columns.

For Calorie Intake, I had a separate **Meals table** with names and calories. I converted the main table's input into a dropdown referencing that Meals table. It felt powerful, almost like a real app. I did the same for Calories Burn with an **Exercises table**. This was my first step to make tracking less painful.

However, Excel dropdowns struggled with duplicates, so I had to simplify my entries. This accidentally helped me: I stuck to specific serving sizes and avoided tempting foods simply because I didn't want to bother adding them to the table. 

The Exercise table was a different story—I found myself intrigued to add more exercises simply because it was fun. The table felt like my personal gym, and the entries were my equipment. I'm sure you understand the feeling.

This concept worked in Excel, so I brought it to life with SwiftUI.
