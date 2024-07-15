import React from 'react';
import { ModuleSection } from '../sections';
import { CardData } from '../constants/CardData';

function ModulePage() {
    return (
        <div>
            <ModuleSection cardData={CardData} />
        </div>
    );
}

export default ModulePage;