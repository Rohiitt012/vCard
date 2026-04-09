const fs = require('fs');
let content = fs.readFileSync('src/components/vcards/EditVCardContent.tsx', 'utf8');
const nameMap = {
  11: 'Cafe & Bistro',
  7: 'Corporate',
  3: 'Creative',
  1: 'Executive',
  12: 'Fitness',
  6: 'Floral',
  10: 'Legal',
  9: 'Medical',
  2: 'Minimal',
  8: 'Photo/Portfolio',
  4: 'Property',
  5: 'Travel',
  13: 'Corporate 1',
  14: 'Corporate 2',
  15: 'Corporate 3',
  16: 'Corporate 4',
  17: 'Corporate 5',
  18: 'Corporate 6',
  19: 'Corporate 7',
  20: 'Corporate 8',
  21: 'Corporate 9',
  22: 'Template 22',
  23: 'Template 23',
  24: 'Template 24',
  25: 'Template 25',
  26: 'Template 26',
  27: 'Template 27',
  28: 'Template 28',
  29: 'Template 29',
  30: 'Template 30'
};

content = content.replace(/id:\s*(\d+),[\r\n\s]+name:\s*"([^"]+)"/g, (match, id, oldName) => {
  if (nameMap[id]) {
    // preserve formatting/spacing as much as possible
    return match.replace(oldName, nameMap[id]);
  }
  return match;
});

fs.writeFileSync('src/components/vcards/EditVCardContent.tsx', content);
console.log('Update finished!');
