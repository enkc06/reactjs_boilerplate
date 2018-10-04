const dev = {
  production: false,
  API_ENDPOINT: "testurl",
  isDebugMode: true
};

const prod = {
  production: true,
  API_ENDPOINT: "produrl",
  isDebugMode: false
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

// Source: https://serverless-stack.com/chapters/environments-in-create-react-app.html

// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc

// https://hackernoon.com/react-pro-tip-use-absolute-imports-for-better-readability-and-easy-refactoring-2ad5c7f2f957

// https://react-bootstrap.netlify.com/components/progress/

// https://cssnano.co
