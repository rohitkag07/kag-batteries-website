import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;
        const modelName = data.get('modelName') as string;

        if (!file || !modelName) {
            return NextResponse.json({ error: 'Missing file or model name' }, { status: 400 });
        }

        // Sanitize model name to create safe filename
        const safeName = modelName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${safeName}.jpg`;

        // Save to public/product-images
        const path = join(process.cwd(), 'public', 'product-images', filename);
        await writeFile(path, buffer);

        return NextResponse.json({
            success: true,
            path: `/product-images/${filename}`
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
