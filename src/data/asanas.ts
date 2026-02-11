import { yogaAsanaImages } from '../assets/images';

export type Asana = {
  name: string;
  description: string;
  image: string;
};

export const ASANAS: Asana[] = [
  {
    name: 'NAUKASANA',
    image: yogaAsanaImages.naukasan,
    description:
      'The name Naukasana comes from the Sanskrit words “Nauka” (boat) and “Asana” (seat). This boat pose strengthens the lungs, liver and pancreas, boosts circulation and supports core strength.',
  },
  {
    name: 'DHANUSH MAKARASANA',
    image: yogaAsanaImages.aakarandhanusthmkaaraasan,
    description:
      'Makarasana resembles a crocodile resting in water. It stretches the back, glutes and legs while reducing stress and improving posture.',
  },
  {
    name: 'ANULOM VILOM',
    image: yogaAsanaImages.anulomVilom,
    description:
      'Anulom Vilom is alternate nostril breathing that balances the nervous system, calms the mind and enhances lung capacity.',
  },
  {
    name: 'BALASANA',
    image: yogaAsanaImages.balasan,
    description:
      'Balasana, or Child’s Pose, is a restorative posture that gently stretches the hips, thighs and spine while calming the mind.',
  },
  {
    name: 'BADDHA PADMASANA',
    image: yogaAsanaImages.bandPadmasana,
    description:
      'The Locked Lotus Pose develops physical and mental stability, encouraging focus and control of energy through the chin lock.',
  },
  {
    name: 'BHUJANGASANA',
    image: yogaAsanaImages.bhujangasana,
    description:
      'Cobra Pose strengthens the spine, opens the chest and is a key posture within the Sun Salutation sequence.',
  },
  {
    name: 'BRAHMACHARYASANA',
    image: yogaAsanaImages.brahmacharyasan,
    description:
      'Also known as the Celibate’s Pose, Brahmacharyasana tones the abdominal muscles and channels vital energy inward.',
  },
  {
    name: 'DHRUVASANA',
    image: yogaAsanaImages.dhruvasan,
    description:
      'Dhruvasana is a standing balance that enhances focus, strengthens the legs and opens the hips.',
  },
  {
    name: 'GOMUKHASANA',
    image: yogaAsanaImages.gomukhasana,
    description:
      'Cow Face Pose stretches the shoulders, chest and hips simultaneously, improving flexibility and relieving tension.',
  },
  {
    name: 'BUTTERFLY ASANA',
    image: yogaAsanaImages.butterfly,
    description:
      'Butterfly Pose opens the hips and groin, stimulates circulation and supports reproductive health.',
  },
  {
    name: 'MATSYASANA',
    image: yogaAsanaImages.matsyasan,
    description:
      'Fish Pose expands the chest, stimulates the throat and relieves tension in the upper back.',
  },
  {
    name: 'VATAYANASANA',
    image: yogaAsanaImages.vaataaynaasn,
    description:
      'Vatayanasana builds balance, flexibility and strength, preparing the practitioner for deeper hip-opening postures.',
  },
];
