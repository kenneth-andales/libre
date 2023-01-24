import Material from '../../assets/help/materials.png'
import Object from '../../assets/help/objects.png'
import Drug from '../../assets/help/drugs.png'
import Firearm from '../../assets/help/firearms.png'
import Flammable from '../../assets/help/flammable.png'
import Fireworks from '../../assets/help/fireworks.png'
import Liquid from '../../assets/help/liquid.png'
import Hazard from '../../assets/help/hazard.png'
import Currency from '../../assets/help/currencies.png'
import Alcoholic from '../../assets/help/alcoholic.png'
import Animal from '../../assets/help/animals.png'
import Perishable from '../../assets/help/perishable.png'

const termandcondition = [
    {
        content: 'Members may post new or pre-owned, but useable items which they wish to share with any memberwho may find value in them.',
        subcontent: []
    },
    {
        content: 'Members may take items for personal use, but not for resale or for commercial purposes.',
        subcontent: []
    },
    {
        content: 'Members are prohibited from posting the following:',
        subcontent: [
            {
                img: Material,
                content: 'Pornographic Materials',
            },
            {
                img: Object,
                content: 'Sex toys, objects and similar items',
            },
            {
                img: Drug,
                content: 'Prohibited or regulated drugs',
            },
            {
                img: Firearm,
                content: 'Firearms, firearm parts, ammunition and explosives or similar items',
            },
            {
                img: Flammable,
                content: 'Chemicals or flammable items',
            },
            {
                img: Fireworks,
                content: 'Fireworks',
            },
            {
                img: Liquid,
                content: 'Liquids and similar items',
            },
            {
                img: Hazard,
                content: 'Hazardous materials',
            },
            {
                img: Currency,
                content: 'Bank bills, notes, coins or currencies',
            },
            {
                img: Alcoholic,
                content: 'Alcoholic beverages',
            },
            {
                img: Animal,
                content: 'Animal products',
            },
            {
                img: Perishable,
                content: 'Perishable items',
            },
        ]
    },
    {
        content: 'Members are required to use the logistics company designated for monitoring purposes and non-compliance may be a cause for removal from this site.',
        subcontent: []
    },
    {
        content: '<span class="bold">LIBRE</span> shall remove any member who takes items and sells them, or uses them for commercial purposes.',
        subcontent: []
    },
    {
        content: '<span class="bold">LIBRE</span> shall remove any posted item which may deem inappropriate.',
        subcontent: []
    },
    {
        content:  '<span class="bold">LIBRE</span> shall remove any member for non-compliance with the terms and conditions of this membership agreement and said member shall not hold LIBRE, its management, directors, officers, employees, and staff liable for any suit for any reason whatsoever.',
        subcontent: []
    }
]

export default termandcondition