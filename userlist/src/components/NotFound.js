// Basic Not Found page. If a user navigates to a page that doesn't exist,
// this page loads. Imports from react for core functionality/card component for
// basic look.

import React from 'react';
import CardComponent from '../components/CardComponent';

const Notfound = () =>
    <div>
        <CardComponent value="users" >
            <p>404: Page Not Found</p>
        </CardComponent>
    </div>
export default Notfound;