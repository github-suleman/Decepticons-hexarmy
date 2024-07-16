# Decepticons-hexarmy
 Cyber Samurai, Binary Knights, and Neon Ninjas protect the digital realm. Explore our epic universe with immersive stories, cutting-edge tools in the Armory, and legendary quests. Join the Pantheon of heroes, uphold the Code of Valor, and discover the power of digital legends. Dive into our tech chronicles and heroic adventures now!


# Interactive Character Carousel

This project is an interactive carousel showcasing unique character profiles, each with a detailed backstory and special abilities. The carousel features hover effects, action buttons, image download functionality, and keyboard navigation, creating an engaging and immersive user experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Character Profiles](#character-profiles)
- [Hover Effect](#hover-effect)
- [Image Download Functionality](#image-download-functionality)
- [Keyboard Navigation](#keyboard-navigation)

## Features
- **Interactive Carousel**: Horizontally scrollable list of character profiles.
- **Hover Highlight**: Thumbnails are highlighted with a box-shadow and scale effect on hover.
- **Detailed Profiles**: Each character profile includes an image, author, title, topic, and description.
- **Action Buttons**: "SEE MORE" and "EXPLORE" buttons for additional interaction.
- **Image Download**: A download button allows users to download character images with filenames matching the image IDs.
- **Keyboard Navigation**: Navigate through the carousel using keyboard arrow keys.

## Technologies Used
- **HTML**: For structuring the carousel and character profiles.
- **CSS**: For styling and hover effects.
- **JavaScript**: For adding interactivity, download functionality, and keyboard navigation.

## Installation
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/interactive-character-carousel.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd interactive-character-carousel
    ```
3. **Open the `index.html` file in your browser to view the carousel.**

## Usage
1. **Hover over the thumbnails** to see the highlight effect.
2. **Click "SEE MORE"** to view additional details about the character.
3. **Click "EXPLORE"** to explore related content or actions.
4. **Click the download button** to download the character image. The image will be saved with a filename matching the image ID.
5. **Use keyboard arrow keys** to navigate through the carousel.

## Project Structure
```
interactive-character-carousel/
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
├── script.js          # JavaScript file for interactivity
├── images/            # Directory containing character images
└── README.md          # Project description and details
```

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, please feel free to submit a pull request or open an issue.

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/YourFeature`)
3. **Commit your changes** (`git commit -m 'Add YourFeature'`)
4. **Push to the branch** (`git push origin feature/YourFeature`)
5. **Open a pull request**

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Character Profiles
### Master Kaito
- **Author**: SULEMANDEV
- **Title**: CYBER SAMURAI
- **Topic**: MASTER KAITO
- **Description**: Master Kaito is the last descendant of a legendary samurai clan, known for their unmatched combat skills and honor. After a devastating war, Kaito was enhanced with cybernetic implants to save his life. Now, he uses his skills and advanced technology to protect the digital realm. Details: Wields a katana that can emit energy waves, has enhanced reflexes and strength.

### Aiko Blade
- **Author**: SULEMANDEV
- **Title**: CYBER SAMURAI
- **Topic**: AIKO BLADE
- **Description**: Aiko Blade, once a brilliant engineer, became a rogue samurai after discovering a plot to exploit ancient knowledge for destructive purposes. She integrated her technological expertise with martial prowess, creating gadgets that aid in stealth and combat. Uses nanotechnology to create temporary cloaking fields, carries throwing stars with hacking capabilities.

### ShadowFlux
- **Author**: SULEMANDEV
- **Title**: NEON NINJAS
- **Topic**: SHADOW FLUX
- **Description**: ShadowFlux is a mysterious figure who emerged from the depths of the dark web. Little is known about his origins, but his mastery of stealth and hacking is unparalleled. ShadowFlux uses his abilities to expose corruption and aid those in need. Possesses the ability to become invisible in digital and physical environments, uses throwing blades that emit EMP pulses.

### Lumina Viper
- **Author**: SULEMANDEV
- **Title**: NEON NINJAS
- **Topic**: LUMINA VIPER
- **Description**: Lumina Viper was once a member of an elite cyber espionage unit, trained in the art of stealth and information retrieval. After discovering her unit's true motives of controlling and manipulating data for personal gain, she defected and became a rogue ninja. Wields dual energy katanas that can cut through digital firewalls, uses light-based illusions to deceive enemies.

### Sir Dataheart
- **Author**: SULEMANDEV
- **Title**: BINARY KNIGHTS
- **Topic**: SIR DATAHEART
- **Description**: Sir Dataheart, originally a knight from a medieval simulation, gained sentience and awareness of the larger digital universe. With a strong sense of chivalry, he vowed to defend the digital realm against malicious code and viruses. His sword can cut through any digital barrier, his shield deflects harmful data attacks, his armor is made of impenetrable binary code.

### Lady Algaress
- **Author**: SULEMANDEV
- **Title**: BINARY KNIGHTS
- **Topic**: LADY ALGARESS
- **Description**: Lady Algaress, a former network security specialist, was knighted by the digital kingdom for her bravery and expertise in thwarting cyber threats. She combines her knowledge of algorithms with her combat skills, creating a unique fighting style. Uses algorithmic spells to manipulate digital environments, her lance can disrupt malware, her armor provides immunity.

## Hover Effect
The hover effect is applied to the thumbnail items to highlight them when hovered over. The effect includes a box-shadow and a scale transformation.

### CSS for Hover Effect
```css
.thumbnail .item:hover {
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    transform: scale(1.05);
    transition: transform 0.3s, box-shadow 0.3s;
}
```

## Image Download Functionality
The image download functionality allows users to download the images of the characters by clicking the download button. The downloaded image will have a filename that matches the image ID.

### JavaScript for Image Download
```javascript
document.querySelectorAll('.downloadbtn').forEach(button => {
    button.addEventListener('click', (e) => {
        const img = e.target.closest('.item').querySelector('img');
        const imgURL = img.src;
        const imgID = img.id;
        const link = document.createElement('a');
        link.href = imgURL;
        link.download = `${imgID}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
```

## Keyboard Navigation
The keyboard navigation functionality allows users to navigate through the carousel using the left and right arrow keys.

### JavaScript for Keyboard Navigation
```javascript
document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;
    const items = document.querySelectorAll('.thumbnail .item');
    let newIndex;

    if (e.key === 'ArrowRight') {
        newIndex = (Array.from(items).indexOf(activeElement) + 1) % items.length;
        items[newIndex].focus();
    } else if (e.key === 'ArrowLeft') {
        newIndex = (Array.from(items).indexOf(activeElement) - 1 + items.length) % items.length;
        items[newIndex].focus();
    }
});
```


Sure! Here's a brief "About Me" section for your GitHub profile:

---

Got it! Here's the updated version with your correct username:

---

### Hi there 👋

### 🔭 About Me
- 🌱 New to GitHub but a fast learner
- 💻 Passionate about coding and technology
- 📚 Always eager to learn and explore new things
- 🎯 Focused on continuous improvement and growth
- 🚀 Ready to collaborate and contribute to exciting projects

### 📊 GitHub Stats

[![My GitHub Stats](https://github-readme-stats.vercel.app/api/?username=github-suleman&count_private=true&theme=algolia&hide_border=true&border_radius=10&showicons=true)]()
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=github-suleman&theme=tokyonight-duo&hide_border=true)](https://git.io/streak-stats)

![](https://komarev.com/ghpvc/?username=github-suleman&color=blue)
