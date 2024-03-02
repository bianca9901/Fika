## Technologies Used

The project was built using the following technologies:

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. [Learn more](https://www.typescriptlang.org/)
- **Next.js**: A React framework for building server-side rendered (SSR) and statically generated (SSG) web applications. [Learn more](https://nextjs.org/)
- **React**: A JavaScript library for building user interfaces. [Learn more](https://reactjs.org/)
- **Tailwind CSS**: A utility-first CSS framework for quickly styling web applications. [Learn more](https://tailwindcss.com/)
- **Framer Motion**: A library for creating animations in React applications. [Learn more](https://framer.com/motion/)
- **React Hot Toast**: A toast notification library for React applications. [Learn more](https://react-hot-toast.com/)
- **React Email Components**: Components for building responsive email templates in React. [Learn more](https://react.email/)
- **React Email Tailwind**: Tailwind CSS integration for React Email Components. [Learn more](https://react.email/docs/components/tailwind)
- **React Three Drei**: A collection of useful helpers and abstractions for Three.js in React. [Learn more](https://github.com/pmndrs/drei)
- **React Three Fiber**: A React renderer for Three.js. [Learn more](https://github.com/pmndrs/react-three-fiber)
- **Clsx**: A utility for constructing className strings conditionally. [Learn more](https://www.npmjs.com/package/clsx)
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. [Learn more](https://eslint.org/)
- **React Confetti**: A library for creating confetti animations in React applications. [Learn more](https://www.npmjs.com/package/react-confetti)
- **React Intersection Observer**: A React implementation of the Intersection Observer API. [Learn more](https://www.npmjs.com/package/react-intersection-observer)
- **Resend**: A library for sending transactional emails and email campaigns. [Learn more](https://resend.io/)
- **Three.js**: A JavaScript library used for creating and displaying 3D computer graphics on web browsers. [Learn more](https://threejs.org/)
- **@Iconify React**: A library for using icons from multiple icon sets with React. [Learn more](https://iconify.design/)
- **Google Fonts:** A library of free and open-source font families. [Learn more](https://fonts.google.com/)
- **Vercel:** A cloud platform for static sites and serverless functions, used for hosting the project. [Learn more](https://vercel.com/)
- **GitHub:** Repository hosting and version control. [Learn more](https://github.com/)
- **Git:** Version control. [Learn more](https://git-scm.com/)

## Credits

### Image Credits

These images were sourced from [Canva:](https://www.canva.com/)

- [profile1.png](https://www.canva.com/photos/MAFT9Dv11Ao/) by Clay Elliot
- [profile2.png](https://www.canva.com/photos/MAFIRyOkyTc/) by vkstudio
- [profile3.png](https://www.canva.com/photos/MAEJKFvt43w/) by laflor
- [profile4.png](https://www.canva.com/photos/MAEMVzdhOWY/) by fizkes
- [profile5.png](https://www.canva.com/photos/MAEHvVwd5Dw/) by rubensky15
- [profile6.png](https://www.canva.com/photos/MADdwn9yn4Y/) by Rido
- [profile7.png](https://www.canva.com/photos/MADarGmvW0Y/) by NADOFOTOS
- [kladdkaka.png](https://www.canva.com/photos/MABMXls1wWY/) by Danny Smythe
- [semla.png](https://www.canva.com/photos/MAE0-ydBtwI/) by Iuliia Nedrygailova's Images
- [bulle.png](https://www.canva.com/photos/MADFFMlcknU/) by exopixel
- [hero-img-bulle.png](https://www.canva.com/photos/MAFDtHJUsUc/) by grafvision

This image was sourced from [CleanPNG:](https://www.cleanpng.com/)

- [chocklad-boll.png](https://www.cleanpng.com/png-havregrynskugle-deepavali-gifts-6597504/)

This image was created using the [Shape Divider App:](https://www.shapedivider.app/)
- shape-divider.svg

This image was created using [Canva:](https://www.canva.com/)
- logo-fika.png

### 3D Animation

The 3D animation used in this project was sourced from [Sketchfab](https://sketchfab.com/):

- **Title:** Coffee cup with plate
- **Source:** [Coffee cup with plate on Sketchfab](https://sketchfab.com/3d-models/coffee-cup-with-plate-c3132a723f434ce2b94e2e563420ef7a)
- **Author:** [Elen](https://sketchfab.com/Kitty999)
- **License Type:** [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)
- **Requirements:** Author must be credited. Modified versions must have the same license. Commercial use is allowed.

If you use this 3D model in your project, be sure to copy and paste this credit wherever you share it.


## How To Use
Follow these steps to get started with the project:

### **1. Clone the Repository**

First, clone the repository to your local machine using the following command:
```
git clone https://github.com/bianca9901/Fika.git
```

### **2. Install Dependencies**

Navigate into the project directory and install the dependencies using npm or yarn:

```
cd fika
```
```
npm install
```
or
```
yarn install
```


### **3. Set Up Resend Account and Environment Variables**

- I. **Create `.env.local` File In The Root Directory Of Your Project**:
  
  ```
  cd fika
  ```
  ```
  touch .env.local
  ```
  
- II. **Create Resend Account**:
  Visit [Resend.com](http://resend.com/) and sign up for an account if you haven't already.
- III. **Generate API Key**:
    - In your Resend dashboard, navigate to API keys section.
    - Generate a new API key by clicking on the "Create API key" button.
- IIII. **Add API Key to Environment Variables**:
    - Copy the API key generated in the previous step.
    - Paste the API key into your **`.env.local`** file as follows:
      
        ```
      RESEND_API_KEY=yourApiKeyHere
        ```
        
- IIIII. **Update Email Address**:
    - In your project, navigate to **`actions/SendEmail`**.
    - Replace the email address **`"biancawikberg99@yahoo.com"`** with your own email address.
Following these steps will ensure that your project is properly configured to use the Resend API for sending emails.

### **4. Start the Development Server**

Once the dependencies are installed and environment variables are set up, you can start the development server:
```
npm run dev
```
or
```
yarn dev
```
This command will start the development server and your project will be accessible at **`http://localhost:3000`** by default.

### **5. Explore and Enjoy!**
You're all set! explore the project, interact with its features, and enjoy using it. If you encounter any issues or have feedback, feel free to open an issue on GitHub.
