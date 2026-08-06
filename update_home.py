import re

# Read original files
with open('c:/Users/hp/Desktop/Chaudhary Clinic/chaudhary-clinic/src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

with open('c:/Users/hp/Desktop/Chaudhary Clinic/chaudhary-clinic/src/app/doctors/page.tsx', 'r', encoding='utf-8') as f:
    doctors_content = f.read()

# Extract sections from doctors page
waseem_start = doctors_content.find('{/* Dr. Waseem Section */}')
sehar_start = doctors_content.find('{/* Dr. Sehar Section */}')
end_idx = doctors_content.rfind('</div>\n  );\n}')

if waseem_start == -1 or sehar_start == -1 or end_idx == -1:
    print("Could not find sections in doctors/page.tsx")
    exit(1)

waseem_section = doctors_content[waseem_start:sehar_start].strip()
sehar_section = doctors_content[sehar_start:end_idx].strip()

# Prepare new dual specialists section for homepage
new_sections = f"""      {{/* Dual Specialists Section */}}
      <div className="relative z-10 -mt-16 rounded-t-[3rem] overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
        {waseem_section}

        {sehar_section}
      </div>"""

# Replace imports
page_content = page_content.replace(
    'import { Phone, Calendar, ArrowRight, Star, MapPin, Award, GraduationCap, Stethoscope } from "lucide-react";',
    'import { Phone, Calendar, ArrowRight, Star, MapPin, Award, GraduationCap, Stethoscope, CheckCircle2, Clock, Activity, HeartPulse } from "lucide-react";'
)

# Extract old dual specialists section in home page
old_start = page_content.find('{/* Dual Specialists Section */}')
old_end = page_content.find('{/* Services Enhanced Section */}')

if old_start == -1 or old_end == -1:
    print("Could not find sections in page.tsx")
    exit(1)

# Replace
new_page_content = page_content[:old_start] + new_sections + '\n\n      ' + page_content[old_end:]

# Write back
with open('c:/Users/hp/Desktop/Chaudhary Clinic/chaudhary-clinic/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_page_content)

print("Replacement successful")
