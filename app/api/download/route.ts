import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Endpoint pour le téléchargement sécurisé des produits
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { error: 'Token de téléchargement manquant' },
      { status: 400 }
    );
  }

  try {
    // Ici, vous devriez:
    // 1. Vérifier le token dans la base de données
    // 2. Vérifier la validité (date d'expiration)
    // 3. Marquer le téléchargement comme utilisé (pour éviter le partage)
    // 4. Générer une URL signée temporaire

    // Simulation: Dans un cas réel, cette URL serait générée par Supabase Storage
    const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/download/${token}`;

    // Exemple de redirection vers un fichier stocké
    // Dans Supabase: supabase.storage.from('products').createSignedUrl(path, expiresIn)

    return NextResponse.json({
      success: true,
      downloadUrl: downloadUrl,
      message: 'Lien de téléchargement généré avec succès',
    });
  } catch (error) {
    console.error('Erreur téléchargement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la génération du lien de téléchargement' },
      { status: 500 }
    );
  }
}

// Endpoint pour créer un lien de téléchargement
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { orderId, productId } = body;

  if (!orderId || !productId) {
    return NextResponse.json(
      { error: 'orderId et productId requis' },
      { status: 400 }
    );
  }

  try {
    // Générer un token sécurisé
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    // Dans un cas réel:
    // 1. Sauvegarder le token dans la base de données avec l'ID de la commande
    // 2. Marquer la commande comme "prête pour livraison"
    // 3. L'URL signée sera générée par Supabase Storage

    return NextResponse.json({
      success: true,
      token,
      expiresAt: expiresAt.toISOString(),
      downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/download/${token}`,
    });
  } catch (error) {
    console.error('Erreur création lien:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du lien de téléchargement' },
      { status: 500 }
    );
  }
}