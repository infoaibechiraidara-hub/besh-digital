import { NextRequest, NextResponse } from 'next/server';

// Webhook CinetPay pour recevoir les notifications de paiement
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      transaction_id,
      amount,
      status,
      error_code,
      error_msg,
    } = body;

    // Log de la transaction
    console.log('Webhook CinetPay reçu:', {
      transactionId: transaction_id,
      amount,
      status,
      errorCode: error_code,
      errorMsg: error_msg,
    });

    // Ici, vous devriez:
    // 1. Vérifier la signature du webhook
    // 2. Mettre à jour la base de données avec le statut du paiement
    // 3. Générer le lien de téléchargement sécurisé
    // 4. Envoyer un email de confirmation

    // Réponse à CinetPay
    return NextResponse.json({
      code: '200',
      message: 'OK',
    });
  } catch (error) {
    console.error('Erreur webhook CinetPay:', error);
    return NextResponse.json(
      { code: '500', message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook CinetPay - POST requis pour recevoir les notifications' 
  });
}