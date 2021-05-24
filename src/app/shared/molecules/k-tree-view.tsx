import React, {useState} from 'react';
import KIconButton from 'src/app/shared/components/primitives/k-icon-button';
import {KFlexRow} from 'src/app/shared/molecules/flex';

export interface TreeViewItem {
    id: number;
    name: string;
    children?: TreeViewItem[];
}

interface KTreeViewProps {
    items: TreeViewItem[];
    renderComponent: React.FunctionComponent<TreeViewItem>;
}

const KTreeView: React.FunctionComponent<KTreeViewProps> = (
    {
        items,
        renderComponent
    }) => {
    const [openOptions, setOpenOptions] = useState(new Set<number>());

    const openCloseDrawer = (id: number) => {
        openOptions.has(id) ? openOptions.delete(id) : openOptions.add(id);
        setOpenOptions(new Set(openOptions));
    }

    return (
        <ul className="tree-view ul-none">
            {items.map(option =>
                <li key={option.id}>
                    <KFlexRow>
                        {option.children &&
                        <KIconButton onClick={() => openCloseDrawer(option.id)} icon={'caret-right'}/>
                        }
                        {renderComponent(option)}
                    </KFlexRow>
                    {option.children && openOptions.has(option.id) &&
                    <KTreeView renderComponent={renderComponent} items={option.children}/>
                    }
                </li>
            )}
        </ul>
    )
}


export default KTreeView;
