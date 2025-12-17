#!/usr/bin/env python3
"""
Master script to add topic-based sections to all remaining modules
"""

# Section definitions for each module
JAVA_SECTIONS = [
    (1, "### Java Fundamentals"),
    (251, "### Object-Oriented Programming"),
    (501, "### Collections Framework"),
    (751, "### Exception Handling"),
    (951, "### Multithreading & Concurrency"),
    (1201, "### I/O & Streams"),
    (1401, "### Java 8+ Features"),
    (1601, "### Advanced Topics")
]

BIGDATA_SECTIONS = [
    (1, "### Big Data Fundamentals"),
    (251, "### Hadoop Ecosystem"),
    (601, "### Apache Spark"),
    (1001, "### NoSQL Databases"),
    (1301, "### Data Processing"),
    (1601, "### Analytics & Tools")
]

DBMS_SECTIONS = [
    (1, "### Database Fundamentals"),
    (251, "### SQL Basics"),
    (501, "### Advanced SQL"),
    (751, "### Normalization"),
    (1001, "### Transactions & Concurrency"),
    (1301, "### Indexing & Optimization"),
    (1601, "### Database Design & Advanced Topics")
]

LINUX_SECTIONS = [
    (1, "### Linux Basics"),
    (301, "### System Administration"),
    (601, "### Networking"),
    (901, "### Cloud Computing Fundamentals"),
    (1201, "### AWS Services"),
    (1501, "### Cloud DevOps")
]

DV_SECTIONS = [
    (1, "### Visualization Fundamentals"),
    (151, "### Tools & Technologies"),
    (301, "### Dashboard Design"),
    (451, "### Advanced Techniques")
]

ANALYTICS_SECTIONS = [
    (1, "### Statistical Foundations"),
    (151, "### Regression Analysis"),
    (301, "### Time Series Analysis"),
    (451, "### Advanced Modeling")
]

def add_sections_to_file(input_file, output_file, sections):
    """Generic function to add sections to any module file"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"❌ File not found: {input_file}")
        return False
    
    output_lines = []
    current_question = 0
    section_index = 0
    inserted_sections = set()
    
    for i, line in enumerate(lines):
        # Detect question number (various formats)
        # Format 1: "1. Question..." or "**1. Question...**"
        # Format 2: "Question: 1. Text"
        if line.strip().startswith(tuple(f"{n}." for n in range(1, 2500))):
            try:
                q_num = int(line.strip().split('.')[0].replace('*', ''))
                current_question = q_num
                
                # Check if we need to insert a section marker
                if section_index < len(sections):
                    breakpoint_q, section_title = sections[section_index]
                    if current_question == breakpoint_q and breakpoint_q not in inserted_sections:
                        output_lines.append(f"\n{section_title}\n\n")
                        inserted_sections.add(breakpoint_q)
                        section_index += 1
            except (ValueError, IndexError):
                pass
        
        output_lines.append(line)
    
    # Write to new file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    
    print(f"✅ Created {output_file} with {len(inserted_sections)} section markers")
    return True

def main():
    modules = [
        ("Java_MCQ_Bank_2000.md", JAVA_SECTIONS, "Java"),
        ("big_data_mcqs_2000.md", BIGDATA_SECTIONS, "Big Data"),
        ("dbms.txt", DBMS_SECTIONS, "DBMS"),
        ("linux_cloudComputing.md", LINUX_SECTIONS, "Linux & Cloud"),
        ("DV.md", DV_SECTIONS, "Data Visualization"),
        ("Advance_analytics.md", ANALYTICS_SECTIONS, "Advanced Analytics")
    ]
    
    success_count = 0
    for filename, sections, module_name in modules:
        input_file = f"./{filename}"
        output_file = f"./{filename.rsplit('.', 1)[0]}_sectioned.{filename.rsplit('.', 1)[1]}"
        
        print(f"\n📝 Processing {module_name}...")
        if add_sections_to_file(input_file, output_file, sections):
            success_count += 1
    
    print(f"\n🎉 Successfully processed {success_count}/{len(modules)} modules")

if __name__ == '__main__':
    main()
