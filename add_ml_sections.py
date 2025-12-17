#!/usr/bin/env python3
"""
Script to add topic-based section markers to ml_mcqs_final_2000.md
"""

def insert_ml_sections():
    input_file = './ml_mcqs_final_2000.md'
    output_file = './ml_mcqs_final_2000_sectioned.md'
    
    # Define sections with approximate question number breakpoints
    sections = [
        (1, "### Introduction to Machine Learning"),
        (151, "### PAC Learning & Formal Models"),
        (351, "### Bias-Variance Trade-off"),
        (551, "### VC Dimension & Capacity"),
        (751, "### Regularization & Stability"),
        (951, "### Structural Risk Minimization"),
        (1151, "### Model Selection & Validation"),
        (1401, "### Machine Learning Taxonomy"),
        (1701, "### Practical ML Use Cases")
    ]
    
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    output_lines = []
    current_question = 0
    section_index = 0
    inserted_sections = set()
    
    for i, line in enumerate(lines):
        # Detect question number (format: "1. Question text..." or "Correct Answer: X")
        if line.strip().startswith(tuple(f"{n}." for n in range(1, 2001))):
            # Extract question number
            try:
                q_num = int(line.strip().split('.')[0])
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
    print(f"   Sections inserted at questions: {sorted(inserted_sections)}")

if __name__ == '__main__':
    insert_ml_sections()
