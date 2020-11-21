let container = document.createElement('div');
container.setAttribute('class', 'resume-container');

let headerParent = document.createElement('div');
headerParent.setAttribute('class', 'header-parent');

let headerImageContainer = document.createElement('div');
headerImageContainer.setAttribute('class', 'header-image-container');

let image = document.createElement('div');
image.setAttribute('class', 'image');

let imgTitle = document.createElement('img');
imgTitle.setAttribute('src', 'profile-image.png');

image.append(imgTitle);
headerImageContainer.append(image);

let headerImageTitle = document.createElement('div');
headerImageTitle.setAttribute('class', 'header-image-title');

let titleContainer = document.createElement('div');
titleContainer.setAttribute('class', 'title-container');

let title = document.createElement('div');
title.setAttribute('class', 'title');

let h1 = document.createElement('h1');
h1.innerHTML = 'HARSH PAWAR';
title.append(h1);

titleContainer.append(title);
headerImageTitle.append(titleContainer);

headerParent.append(headerImageContainer);
headerParent.append(headerImageTitle);

let headerAddress = document.createElement('div');
headerAddress.setAttribute('class', 'header-address');
headerAddress.innerHTML = 'Harsh Pawar, Mumbai 99999 | 999-999-9999 | pawarharsh21@gmail.com';

headerParent.append(headerAddress);
container.append(headerParent);




let resumeBodyContainer = document.createElement('div');
resumeBodyContainer.setAttribute('class', 'resume-body-container');

let resumeSectionContainer = document.createElement('div');
resumeSectionContainer.setAttribute('class', 'resume-section-container');

let resumeTitle = document.createElement('div');
resumeTitle.setAttribute('class', 'resume-title');

let img = document.createElement('img');
img.setAttribute('src', 'profile-image.png');

let labelProfile = document.createElement('label');
labelProfile.innerHTML = 'Profile';

resumeTitle.append(img);
resumeTitle.append(labelProfile);

let resumeContent = document.createElement('div');
resumeContent.setAttribute('class', 'resume-content');
resumeContent.innerHTML = 'Aspiring to work within an organization that offers responsible position where I can utilize my skills and capabilities which will add value to department goals and ultimately organizational growth and also enhance my personal growth through continual upgradation of knowledge.'

resumeSectionContainer.append(resumeTitle);
resumeSectionContainer.append(resumeContent);
resumeBodyContainer.append(resumeSectionContainer);



//
let resumeSectionContainerSkills = document.createElement('div');
resumeSectionContainerSkills.setAttribute('class', 'resume-section-container');

let resumeTitleSkills = document.createElement('div');
resumeTitleSkills.setAttribute('class', 'resume-title');

let labelSkills = document.createElement('label');
labelSkills.innerHTML = 'Skills';

resumeTitleSkills.append(img.cloneNode(true));
resumeTitleSkills.append(labelSkills);

let resumeSkillsContent = document.createElement('div');
resumeSkillsContent.setAttribute('class', 'resume-skills-content');

let skillsTitle = document.createElement('div');
skillsTitle.setAttribute('class', 'skills-title');

skillsTitle.innerHTML = 'Technical Skills';

resumeSkillsContent.append(skillsTitle);



let skills = document.createElement('div');
skills.setAttribute('class', 'skills');

let skillsLabel1 = document.createElement('div');
skillsLabel1.setAttribute('class', 'skills-label');
skillsLabel1.innerHTML = 'Javascript';

let skillsSlider1 = document.createElement('div');
skillsSlider1.setAttribute('class', 'skills-slider');

let input1 = document.createElement('input');
input1.setAttribute('type', 'range');
input1.setAttribute('min', '1');
input1.setAttribute('max', '100');
input1.setAttribute('value', '75');
input1.setAttribute('class', 'range');

skillsSlider1.append(input1);


let skillsLabel2 = document.createElement('div');
skillsLabel2.setAttribute('class', 'skills-label');
skillsLabel2.innerHTML = 'Css 3';

let skillsSlider2 = document.createElement('div');
skillsSlider2.setAttribute('class', 'skills-slider');

let input2 = document.createElement('input');
input2.setAttribute('type', 'range');
input2.setAttribute('min', '1');
input2.setAttribute('max', '100');
input2.setAttribute('value', '80');
input2.setAttribute('class', 'range');

skillsSlider2.append(input2);



let skillsLabel3 = document.createElement('div');
skillsLabel3.setAttribute('class', 'skills-label');
skillsLabel3.innerHTML = 'Html 5';

let skillsSlider3 = document.createElement('div');
skillsSlider3.setAttribute('class', 'skills-slider');

let input3 = document.createElement('input');
input3.setAttribute('type', 'range');
input3.setAttribute('min', '1');
input3.setAttribute('max', '100');
input3.setAttribute('value', '78');
input3.setAttribute('class', 'range');

skillsSlider3.append(input3);



let skillsLabel4 = document.createElement('div');
skillsLabel4.setAttribute('class', 'skills-label');
skillsLabel4.innerHTML = 'Angular js';

let skillsSlider4 = document.createElement('div');
skillsSlider4.setAttribute('class', 'skills-slider');

let input4 = document.createElement('input');
input4.setAttribute('type', 'range');
input4.setAttribute('min', '1');
input4.setAttribute('max', '100');
input4.setAttribute('value', '75');
input4.setAttribute('class', 'range');

skillsSlider4.append(input4);



let skillsLabel5 = document.createElement('div');
skillsLabel5.setAttribute('class', 'skills-label');
skillsLabel5.innerHTML = 'Typescript';

let skillsSlider5 = document.createElement('div');
skillsSlider5.setAttribute('class', 'skills-slider');

let input5 = document.createElement('input');
input5.setAttribute('type', 'range');
input5.setAttribute('min', '1');
input5.setAttribute('max', '100');
input5.setAttribute('value', '75');
input5.setAttribute('class', 'range');

skillsSlider5.append(input5);



let skillsLabel6 = document.createElement('div');
skillsLabel6.setAttribute('class', 'skills-label');
skillsLabel6.innerHTML = 'Typescript';

let skillsSlider6 = document.createElement('div');
skillsSlider6.setAttribute('class', 'skills-slider');

let input6 = document.createElement('input');
input6.setAttribute('type', 'range');
input6.setAttribute('min', '1');
input6.setAttribute('max', '100');
input6.setAttribute('value', '75');
input6.setAttribute('class', 'range');

skillsSlider6.append(input6);

skills.append(skillsLabel1);
skills.append(skillsSlider1);

skills.append(skillsLabel2);
skills.append(skillsSlider2);

skills.append(skillsLabel3);
skills.append(skillsSlider3);

skills.append(skillsLabel4);
skills.append(skillsSlider4);

skills.append(skillsLabel5);
skills.append(skillsSlider5);

skills.append(skillsLabel6);
skills.append(skillsSlider6);

resumeSkillsContent.append(skills);


let resumeSectionContainerSummary = document.createElement('div');
resumeSectionContainerSummary.setAttribute('class', 'resume-section-container');

let resumeTitleSummary = document.createElement('div');
resumeTitleSummary.setAttribute('class', 'resume-title');

resumeTitleSummary.append(img.cloneNode(true));

let labelSummary = document.createElement('label');
labelSummary.innerHTML = 'Summary';

resumeTitleSummary.append(labelSummary);

let resumeSummaryContent = document.createElement('div');
resumeSummaryContent.setAttribute('class', 'resume-content');
resumeSummaryContent.innerHTML = 'Graduated from St. John college and technology with First Class.Excellent in trouble shooting and debugging software applications,  creating, executing, and documenting test cases. Worked for 1.4 yrs in verchaska infotech as software engineer trainee.Extensive experience in building web application  like angular js, typescript, Java 8,spring boot, jpa, Sass, flux architecture, es 6 and.es7.';

resumeSectionContainerSummary.append(resumeTitleSummary);
resumeSectionContainerSummary.append(resumeSummaryContent);

resumeSectionContainerSkills.append(resumeTitleSkills);
resumeSectionContainerSkills.append(resumeSkillsContent);

resumeBodyContainer.append(resumeSectionContainerSkills);
resumeBodyContainer.append(resumeSectionContainerSummary);


let resumeBodyContainer2 = document.createElement('div');
resumeBodyContainer2.setAttribute('class', 'resume-body-container')

let resumeSectionContainerEducation = document.createElement('div');
resumeSectionContainerEducation.setAttribute('class', 'resume-section-container')


let resumeTitleEducation = document.createElement('div');
resumeTitleEducation.setAttribute('class', 'resume-title');

resumeTitleEducation.append(img.cloneNode(true));

let labelEducation = document.createElement('label');
labelEducation.innerHTML = 'Education';

resumeTitleEducation.append(labelEducation);

let resumeContentEducation = document.createElement('div');
resumeContentEducation.setAttribute('class', 'resume-content');

resumeContentEducation.innerHTML = ' <b>St.John College of Engineering and management</b><br>Mumbai university, MH<br>Completed Bachelors degree for st.john college of engineering and management with an CGPA 6.75 Aggre. in the field of Information technology.'

resumeSectionContainerEducation.append(resumeTitleEducation, resumeContentEducation);



let resumeSectionContainerStrength = document.createElement('div');
resumeSectionContainerStrength.setAttribute('class', 'resume-section-container');

let resumeTitleStrength = document.createElement('div');
resumeTitleStrength.setAttribute('class', 'resume-title');

resumeTitleStrength.append(img.cloneNode(true));

let labelStrength = document.createElement('label');
labelStrength.innerHTML = 'Strengths and Hobbies';

resumeTitleStrength.append(labelStrength);

let resumeContentStrength = document.createElement('div');
resumeContentStrength.setAttribute('class', 'resume-content');

let unorderList = document.createElement('ul');

let listElem1 = document.createElement('li');
listElem1.innerHTML = 'Ability to work in a team and team handling capability.';

let listElem2 = document.createElement('li');
listElem2.innerHTML = 'Self-motivate.';

let listElem3 = document.createElement('li');
listElem3.innerHTML = 'Soft-spoken';

let listElem4 = document.createElement('li');
listElem4.innerHTML = 'Like to learn and keep improving.';

let listElem5 = document.createElement('li');
listElem5.innerHTML = 'Watching and playing sports (cricket, football).';


unorderList.append(listElem1, listElem2, listElem3, listElem4, listElem5);

resumeContentStrength.append(unorderList);

resumeSectionContainerStrength.append(resumeTitleStrength, resumeContentStrength);




let resumeSectionContainerAchievement = document.createElement('div');
resumeSectionContainerAchievement.setAttribute('class', 'resume-section-container');

let resumeTitleAchievement = document.createElement('div');
resumeTitleAchievement.setAttribute('class', 'resume-title');

resumeTitleAchievement.append(img.cloneNode(true));

let labelAchievement = document.createElement('label');
labelAchievement.innerHTML = 'Awards & Achievements';

resumeTitleAchievement.append(labelAchievement);

let resumeContentAcheievement = document.createElement('div');
resumeContentAcheievement.setAttribute('class', 'resume-content');

let unorderListA = document.createElement('ul');

let listElemA1 = document.createElement('li');
listElemA1.innerHTML = 'Won web design competition (1st prize).';

let listElemA2 = document.createElement('li');
listElemA2.innerHTML = 'Reached finals of SIH (Smart India Hackathon).';

unorderListA.append(listElemA1);
unorderListA.append(listElemA2);

resumeContentAcheievement.append(unorderListA);
resumeSectionContainerAchievement.append(resumeTitleAchievement, resumeContentAcheievement);


let resumeSectionContainerDeclaration = document.createElement('div');
resumeSectionContainerDeclaration.setAttribute('class', 'resume-section-container');

let resumeTitleDeclaration = document.createElement('div');
resumeTitleDeclaration.setAttribute('class', 'resume-title');

resumeTitleDeclaration.append(img.cloneNode(true));

let labelDeclaration = document.createElement('label');
labelDeclaration.innerHTML = 'Declaration';

resumeTitleDeclaration.append(labelDeclaration);

let resumeContentDeclaration = document.createElement('div');
resumeContentDeclaration.setAttribute('class', 'resume-content');

resumeContentDeclaration.innerHTML = 'I hereby declare that the above written particulars are true to the best of my knowledge and belief.<br><br>Place: Mumbai';

resumeSectionContainerDeclaration.append(resumeTitleDeclaration, resumeContentDeclaration);

resumeBodyContainer2.append(resumeSectionContainerEducation);
resumeBodyContainer2.append(resumeSectionContainerStrength);
resumeBodyContainer2.append(resumeSectionContainerAchievement);
resumeBodyContainer2.append(resumeSectionContainerDeclaration);

container.append(resumeBodyContainer);
container.append(resumeBodyContainer2);
document.body.append(container);